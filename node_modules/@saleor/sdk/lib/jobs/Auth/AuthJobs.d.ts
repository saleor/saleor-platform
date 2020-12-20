import { DataErrorCheckoutTypes } from "../../api/Checkout/types";
import { ApolloClientManager } from "../../data/ApolloClientManager";
import { LocalStorageHandler } from "../../helpers/LocalStorageHandler";
import { DataErrorAuthTypes } from "../../api/Auth/types";
import { JobRunResponse } from "../types";
import { JobsHandler } from "../JobsHandler";
export declare enum AuthJobsEvents {
    SIGN_IN_TOKEN_REFRESHING = 0
}
export interface AuthJobsEventsValues {
    [AuthJobsEvents.SIGN_IN_TOKEN_REFRESHING]: boolean;
}
export declare type PromiseAuthJobRunResponse = Promise<JobRunResponse<DataErrorAuthTypes | DataErrorCheckoutTypes>>;
export declare class AuthJobs extends JobsHandler<AuthJobsEventsValues> {
    private apolloClientManager;
    private localStorageHandler;
    constructor(localStorageHandler: LocalStorageHandler, apolloClientManager: ApolloClientManager);
    provideUser: () => PromiseAuthJobRunResponse;
    registerAccount: ({ email, password, redirectUrl, }: {
        email: string;
        password: string;
        redirectUrl: string;
    }) => PromiseAuthJobRunResponse;
    resetPasswordRequest: ({ email, redirectUrl, }: {
        email: string;
        redirectUrl: string;
    }) => PromiseAuthJobRunResponse;
    signIn: ({ email, password, }: {
        email: string;
        password: string;
    }) => PromiseAuthJobRunResponse;
    signOut: () => PromiseAuthJobRunResponse;
    verifySignInToken: () => Promise<{
        dataError: {
            error: Error;
            type: DataErrorAuthTypes;
        };
        data?: undefined;
    } | {
        dataError: {
            error: readonly import("graphql").GraphQLError[] | import("../../mutations/gqlTypes/VerifyToken").VerifyToken_tokenVerify_errors[];
            type: DataErrorAuthTypes;
        };
        data?: undefined;
    } | {
        data: {
            isValid: boolean | undefined;
            payload: any;
            user: import("../../mutations/gqlTypes/VerifyToken").VerifyToken_tokenVerify_user | null | undefined;
        } | undefined;
        dataError?: undefined;
    }>;
    refreshSignInToken: ({ refreshToken, }: {
        refreshToken?: string | undefined;
    }) => PromiseAuthJobRunResponse;
}
