import { CheckoutErrorCode } from "./../../gqlTypes/globalTypes";
export interface CheckoutError {
    __typename: "CheckoutError";
    /**
     * The error code.
     */
    code: CheckoutErrorCode;
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
