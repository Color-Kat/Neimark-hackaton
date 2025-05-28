import { API_BASE_URL } from "@/shared/api/api-instanse";

export class SSEService {
    private eventSource: EventSource | null = null;

    subscribe<T = any>(
        url: string,
        onUpdate: (state: T) => void,
        onError: (error: Event) => void)
    {
        this.unsubscribe();
        this.eventSource = new EventSource(API_BASE_URL + url);

        this.eventSource.onmessage = (event) => {
            const data: T = JSON.parse(event.data);
            onUpdate(data);
        };

        this.eventSource.onerror = (error) => {
            this.unsubscribe();

            onError(error);
        };
    }

    unsubscribe() {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
        }
    }
}