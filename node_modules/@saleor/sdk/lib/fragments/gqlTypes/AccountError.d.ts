import { AccountErrorCode } from "./../../gqlTypes/globalTypes";
export interface AccountError {
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
