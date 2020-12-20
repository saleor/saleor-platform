import { AccountErrorCode } from "./../../gqlTypes/globalTypes";
export interface RegisterAccount_accountRegister_accountErrors {
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
export interface RegisterAccount_accountRegister {
    __typename: "AccountRegister";
    accountErrors: RegisterAccount_accountRegister_accountErrors[];
    /**
     * Informs whether users need to confirm their email address.
     */
    requiresConfirmation: boolean | null;
}
export interface RegisterAccount {
    /**
     * Register a new user.
     */
    accountRegister: RegisterAccount_accountRegister | null;
}
export interface RegisterAccountVariables {
    email: string;
    password: string;
    redirectUrl: string;
}
