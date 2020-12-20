import { AccountErrorCode } from "./../../gqlTypes/globalTypes";
export interface VerifyToken_tokenVerify_user {
    __typename: "User";
    /**
     * The ID of the object.
     */
    id: string;
}
export interface VerifyToken_tokenVerify_errors {
    __typename: "AccountError";
    /**
     * The error code.
     */
    code: AccountErrorCode;
    /**
     * Name of a field that caused the error. A value of `null` indicates that the
     * error isn't associated with a particular field.
     */
    field: string | null;
    /**
     * The error message.
     */
    message: string | null;
}
export interface VerifyToken_tokenVerify {
    __typename: "VerifyToken";
    /**
     * Determine if token is valid or not.
     */
    isValid: boolean;
    /**
     * JWT payload.
     */
    payload: any | null;
    /**
     * User assigned to token.
     */
    user: VerifyToken_tokenVerify_user | null;
    errors: VerifyToken_tokenVerify_errors[];
}
export interface VerifyToken {
    /**
     * Verify JWT token.
     */
    tokenVerify: VerifyToken_tokenVerify | null;
}
export interface VerifyTokenVariables {
    token: string;
}
