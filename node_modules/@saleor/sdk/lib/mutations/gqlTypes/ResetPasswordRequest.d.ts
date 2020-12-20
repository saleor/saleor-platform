import { AccountErrorCode } from "./../../gqlTypes/globalTypes";
export interface ResetPasswordRequest_requestPasswordReset_accountErrors {
    __typename: "AccountError";
    /**
     * Name of a field that caused the error. A value of `null` indicates that the
     * error isn't associated with a particular field.
     */
    field: string | null;
    /**
     * The error message.
     */
    message: string | null;
    /**
     * The error code.
     */
    code: AccountErrorCode;
}
export interface ResetPasswordRequest_requestPasswordReset {
    __typename: "RequestPasswordReset";
    accountErrors: ResetPasswordRequest_requestPasswordReset_accountErrors[];
}
export interface ResetPasswordRequest {
    /**
     * Sends an email with the account password modification link.
     */
    requestPasswordReset: ResetPasswordRequest_requestPasswordReset | null;
}
export interface ResetPasswordRequestVariables {
    email: string;
    redirectUrl: string;
}
