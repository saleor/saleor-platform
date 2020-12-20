import { ApolloLink, Operation, FetchResult, Observable } from 'apollo-link';
import { HttpOptions } from 'apollo-link-http-common';
export declare namespace BatchHttpLink {
    interface Options extends HttpOptions {
        batchMax?: number;
        batchInterval?: number;
        batchKey?: (operation: Operation) => string;
    }
}
export declare class BatchHttpLink extends ApolloLink {
    private batchInterval;
    private batchMax;
    private batcher;
    constructor(fetchParams?: BatchHttpLink.Options);
    request(operation: Operation): Observable<FetchResult> | null;
}
//# sourceMappingURL=batchHttpLink.d.ts.map