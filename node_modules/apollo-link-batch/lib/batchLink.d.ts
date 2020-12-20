import { ApolloLink, Operation, FetchResult, Observable, NextLink } from 'apollo-link';
import { BatchHandler } from './batching';
export { OperationBatcher, BatchableRequest, BatchHandler } from './batching';
export declare namespace BatchLink {
    interface Options {
        batchInterval?: number;
        batchMax?: number;
        batchHandler?: BatchHandler;
        batchKey?: (operation: Operation) => string;
    }
}
export declare class BatchLink extends ApolloLink {
    private batcher;
    constructor(fetchParams?: BatchLink.Options);
    request(operation: Operation, forward?: NextLink): Observable<FetchResult> | null;
}
//# sourceMappingURL=batchLink.d.ts.map