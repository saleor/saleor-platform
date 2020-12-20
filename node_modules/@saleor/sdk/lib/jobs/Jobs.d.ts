import { ApolloClientManager } from "../data/ApolloClientManager";
import { LocalStorageHandler } from "../helpers/LocalStorageHandler";
import { AuthJobs } from "./Auth";
import { CheckoutJobs } from "./Checkout";
export interface IJobs {
    auth: AuthJobs;
    checkout: CheckoutJobs;
}
export declare class Jobs implements IJobs {
    auth: AuthJobs;
    checkout: CheckoutJobs;
    constructor(localStorageHandler: LocalStorageHandler, apolloClientManager: ApolloClientManager);
}
