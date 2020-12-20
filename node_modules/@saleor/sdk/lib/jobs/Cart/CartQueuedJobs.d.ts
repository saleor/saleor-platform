import { ApolloClientManager } from "../../data/ApolloClientManager";
import { LocalStorageHandler } from "../../helpers/LocalStorageHandler";
import { QueuedJobsHandler } from "../QueuedJobsHandler";
export declare enum ErrorCartTypes {
    "SET_CART_ITEM" = 0
}
export declare class CartQueuedJobs extends QueuedJobsHandler<ErrorCartTypes> {
    private apolloClientManager;
    private localStorageHandler;
    constructor(localStorageHandler: LocalStorageHandler, apolloClientManager: ApolloClientManager);
    setCartItem: () => Promise<void>;
}
