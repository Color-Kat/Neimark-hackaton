import { api } from "@/shared/api/api-instanse";
import { ScanCreate, ScanGetScan, ScanGetScansByUserId, ScanStatusChanged } from "@app/contracts";
import type { Scan } from "@app/interfaces";
import { ScanStatus, ScanType } from "@app/interfaces";

export { Scan as Scan, ScanStatus, ScanType, ScanStatusChanged };

// Just alias
export const ScanningStatues = ScanStatusChanged.Statuses;
export type ScanningStatues = typeof ScanningStatues[keyof typeof ScanningStatues];

export const scanApi = {
    getScanById: async (scanId: string) => {
        const result = await api.get<ScanGetScan.Response>('/scans/' + scanId);
        return result.data;
    },

    getScanByUserId: async (userId: string) => {
        try{
            const result = await api.get<ScanGetScansByUserId.Response>(`/users/${userId}/scans`);
            return result.data;
        } catch (error) {
            console.log(error);
            return {scans: []};
        }
    },

    createScan: async ({photo, type, userId}: ScanCreate.Request) => {
        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('userId', userId);
        formData.append('type', type);

        return api.post<ScanCreate.Response>("/scans", formData);
    }
}