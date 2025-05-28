import { Scan, scanApi, ScanningStatues, ScanStatusChanged, ScanType } from "@/entities/scan";
import { SSEService } from "@/shared/api/sse-service";
import { action, makeAutoObservable, runInAction } from "mobx";

class ScannerStore {

    photo: File | null = null;
    scanningStatus: ScanningStatues = ScanningStatues.INITIAL;
    // scanResult: Scan | null = scanResult;
    scanResult: Scan | null = null;
    isScanResultOpen: boolean = false;
    scanId: string = "";
    error: string = "";

    // public photoUploadProgress: number = 0;

    constructor(
        private sseService: SSEService
    ) {
        makeAutoObservable(this);

        // Observe scanId changes
        // reaction(
        //     () => this.scanId,
        //     (newScanId: string) => {
        //         this.subscribeScanStatusUpdates(newScanId);
        //     }
        // );
    }

    reset() {
        runInAction(() => {
            this.photo = null;
            this.scanningStatus = ScanningStatues.INITIAL;
            this.scanResult = null;
            this.scanId = '';
            this.error = '';
            this.sseService.unsubscribe();
        });
    }

    setPhoto(photo: File | null) {
        this.photo = photo;
        this.error = '';
    }

    async createScan() {
        try {
            if (!this.photo) throw new Error('Не выбрано фото для сканирования');

            runInAction(() => {
                this.scanningStatus = ScanningStatues.UPLOADING;
                this.error = '';
            });

            const { data } = await scanApi.createScan({
                photo : this.photo,
                userId: 'admin',
                type  : ScanType.FOOD
            });

            runInAction(() => {
                this.scanId = data.scan.id;
                this.scanningStatus = ScanningStatues.CREATED;
            });

            this.subscribeToScanStatusUpdates();
        } catch (error) {
            console.log(`Ошибка: ${(error as Error).message}`);
            runInAction(() => {
                this.error = (error as Error).message;
                this.scanningStatus = ScanningStatues.INITIAL;
            });
        }
    }

    private subscribeToScanStatusUpdates() {
        if (!this.scanId) return;

        this.sseService.subscribe<ScanStatusChanged.Payload>(
            `/scans/${this.scanId}/status-updates`,
            action((event) => {
                this.scanningStatus = event.status;

                if (this.scanningStatus === ScanningStatues.COMPLETED) {
                    this.getScanResult();
                }

                if (
                    this.scanningStatus == ScanningStatues.FAILED ||
                    this.scanningStatus == ScanningStatues.ANALYSIS_FAILED ||
                    this.scanningStatus == ScanningStatues.RECOGNITION_FAILED
                ) {
                    this.error = "Не удалось проанализировать состав";
                    this.sseService.unsubscribe();
                    this.getScanResult();
                }
            }),
            action((error) => {
                this.sseService.unsubscribe();
                // this.error = error;
            })
        );
    }

    private getScanResult = async () => {
        const result = await scanApi.getScanById(this.scanId);
        runInAction(() => {
            this.scanResult = result.scan;
            this.isScanResultOpen = true;
        });
    }

    public closeScanResult = () => {
        runInAction(() => {
            this.isScanResultOpen = false;
            this.photo = null;
            this.scanningStatus = ScanningStatues.INITIAL;
            this.scanId = "";
        });
    }

    public dispose() {
        this.reset();
    }
}

export const scannerStore = new ScannerStore(
    new SSEService()
);
