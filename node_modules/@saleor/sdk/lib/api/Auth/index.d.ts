import { User } from "../../fragments/gqlTypes/User";
import { ErrorListener } from "../../helpers";
import { JobsManager } from "../../jobs";
import { SaleorState } from "../../state";
import { PromiseRunResponse } from "../types";
import { DataErrorAuthTypes } from "./types";
import { Config } from "../../types";
export declare const BROWSER_NO_CREDENTIAL_API_MESSAGE = "Saleor SDK is unable to use browser Credential Management API.";
export declare class AuthAPI extends ErrorListener {
    /**
     * Indicates if data is initialized, initially retrieved from cache or initially fetched.
     */
    loaded: boolean;
    /**
     * User object with currently signed in user data.
     */
    user?: User | null;
    /**
     * Indicates if user is signed in.
     */
    authenticated?: boolean;
    /**
     * Token used for user authentication.
     */
    token?: string;
    /**
     * Indicate if token refreshing is in progress.
     */
    tokenRefreshing: boolean;
    /**
     * Indicate if token verifying is in progress.
     */
    tokenVerifying: boolean;
    private saleorState;
    private jobsManager;
    private config;
    constructor(saleorState: SaleorState, jobsManager: JobsManager, config: Config);
    /**
     * Tries to register a user account with given email and password.
     * @param email Email used for new account.
     * @param password Password used for new account.
     * @param redirectUrl URL used for redirection.
     */
    registerAccount: (email: string, password: string, redirectUrl: string) => PromiseRunResponse<DataErrorAuthTypes>;
    /**
     * Requests a password reset for an user account with given email.
     * @param email Email used for account.
     * @param redirectUrl URL used for redirection.
     */
    resetPasswordRequest: (email: string, redirectUrl: string) => PromiseRunResponse<DataErrorAuthTypes>;
    /**
     * Tries to authenticate user with given email and password.
     * @param email Email used for authentication.
     * @param password Password used for authentication.
     * @param autoSignIn Indicates if SDK should try to sign in user with given credentials in future without explicitly calling this method. True by default.
     */
    signIn: (email: string, password: string, autoSignIn?: boolean) => PromiseRunResponse<DataErrorAuthTypes>;
    /**
     * Sign out user by clearing cache, local storage and authentication token.
     */
    signOut: () => PromiseRunResponse<DataErrorAuthTypes>;
    /**
     * Tries to refresh user token to keep previously signed in user authenticated.
     * @param refreshToken Refresh token. Required when refreshToken is not provided as a cookie.
     */
    refreshSignInToken: (refreshToken?: string | undefined) => PromiseRunResponse<DataErrorAuthTypes>;
    private autoSignIn;
}
