import { ApolloClientManager } from "../data/ApolloClientManager";
import { PaymentGateway } from "../fragments/gqlTypes/PaymentGateway";
import { User } from "../fragments/gqlTypes/User";
import { NamedObservable } from "../helpers";
import { ICheckoutModel, IPaymentModel, LocalStorageHandler } from "../helpers/LocalStorageHandler";
import { JobsManager } from "../jobs";
import { Config } from "../types";
import { ISaleorStateSummeryPrices, StateItems } from "./types";
export interface SaleorStateLoaded {
    user: boolean;
    signInToken: boolean;
    checkout: boolean;
    payment: boolean;
    summaryPrices: boolean;
}
export declare class SaleorState extends NamedObservable<StateItems> {
    user?: User | null;
    signInToken?: string | null;
    signInTokenRefreshing?: boolean;
    signInTokenVerifying?: boolean;
    checkout?: ICheckoutModel;
    promoCode?: string;
    selectedShippingAddressId?: string;
    selectedBillingAddressId?: string;
    payment?: IPaymentModel | null;
    summaryPrices?: ISaleorStateSummeryPrices;
    availablePaymentGateways?: PaymentGateway[] | null;
    loaded: SaleorStateLoaded;
    private apolloClientManager;
    private jobsManager;
    private localStorageHandler;
    constructor(config: Config, localStorageHandler: LocalStorageHandler, apolloClientManager: ApolloClientManager, jobsManager: JobsManager);
    /**
     * Subscribes to particular changes occuring in data sources like apollo cache or local storage.
     * Every update in data source will result in update of respective class member.
     */
    private subscribeStateToChanges;
    /**
     * Initialize class members with cached or fetched data.
     */
    private initializeState;
    private verityToken;
    private onLoadedUpdate;
    private onClearLocalStorage;
    private onSignInTokenUpdate;
    private onSignInTokenVerifyingUpdate;
    private onSignInTokenRefreshUpdate;
    private onUserUpdate;
    private onCheckoutUpdate;
    private onPaymentUpdate;
    private static calculateSummaryPrices;
}
