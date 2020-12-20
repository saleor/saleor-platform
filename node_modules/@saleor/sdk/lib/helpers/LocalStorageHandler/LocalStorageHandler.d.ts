import { ICheckoutModel, IJobsModel, IPaymentModel } from "./types";
import LocalStorageHandlerProxy from "./Proxy";
export declare class LocalStorageHandler extends LocalStorageHandlerProxy {
    static getCheckout(): ICheckoutModel | null;
    static getPayment(): IPaymentModel | null;
    static getJobs(): IJobsModel | null;
    static getSignInToken(): string | null;
    static getCsrfToken(): string | null;
    setSignInToken(token: string | null): void;
    setCsrfToken(csrfToken: string | null): void;
    setCheckout(checkout: ICheckoutModel | null): void;
    setPayment(payment: IPaymentModel | null): void;
    setJobs(jobs: IJobsModel | null): void;
    clear(): void;
}
