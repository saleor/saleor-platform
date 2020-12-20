import { AccountErrorCode } from "./../../gqlTypes/globalTypes";
export interface RefreshToken_tokenRefresh_user {
    __typename: "User";
    /**
     * The ID of the object.
     */
    id: string;
}
export interface RefreshToken_tokenRefresh_errors {
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
export interface RefreshToken_tokenRefresh {
    __typename: "RefreshToken";
    /**
     * JWT token, required to authenticate.
     */
    token: string | null;
    /**
     * A user instance.
     */
    user: RefreshToken_tokenRefresh_user | null;
    errors: RefreshToken_tokenRefresh_errors[];
}
export interface RefreshToken {
    /**
     * Refresh JWT token. Mutation tries to take refreshToken from the input.If it
     * fails it will try to take refreshToken from the http-only cookie
     * -refreshToken. csrfToken is required when refreshToken is provided as a cookie.
     */
    tokenRefresh: RefreshToken_tokenRefresh | null;
}
export interface RefreshTokenVariables {
    csrfToken?: string | null;
    refreshToken?: string | null;
}
