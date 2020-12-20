import { Observable, Operation, NextLink, FetchResult } from 'apollo-link';
export declare type BatchHandler = (operations: Operation[], forward?: (NextLink | undefined)[]) => Observable<FetchResult[]> | null;
export interface BatchableRequest {
    operation: Operation;
    forward?: NextLink;
    observable?: Observable<FetchResult>;
    next?: Array<(result: FetchResult) => void>;
    error?: Array<(error: Error) => void>;
    complete?: Array<() => void>;
}
export declare class OperationBatcher {
    queuedRequests: Map<string, BatchableRequest[]>;
    private batchInterval;
    private batchMax;
    private batchHandler;
    private batchKey;
    constructor({ batchInterval, batchMax, batchHandler, batchKey, }: {
        batchInterval?: number;
        batchMax?: number;
        batchHandler: BatchHandler;
        batchKey?: (operation: Operation) => string;
    });
    enqueueRequest(request: BatchableRequest): Observable<FetchResult>;
    consumeQueue(key?: string): (Observable<FetchResult> | undefined)[] | undefined;
    private scheduleQueueConsumption;
}
//# sourceMappingURL=batching.d.ts.map