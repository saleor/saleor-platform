import { AddressInput, AccountErrorCode } from "./../../gqlTypes/globalTypes";
export interface CreateUserAddress_accountAddressCreate_errors {
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
export interface CreateUserAddress_accountAddressCreate_user_defaultShippingAddress_country {
    __typename: "CountryDisplay";
    /**
     * Country code.
     */
    code: string;
    /**
     * Country name.
     */
    country: string;
}
export interface CreateUserAddress_accountAddressCreate_user_defaultShippingAddress {
    __typename: "Address";
    /**
     * The ID of the object.
     */
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    /**
     * Shop's default country.
     */
    country: CreateUserAddress_accountAddressCreate_user_defaultShippingAddress_country;
    countryArea: string;
    phone: string | null;
    /**
     * Address is user's default billing address.
     */
    isDefaultBillingAddress: boolean | null;
    /**
     * Address is user's default shipping address.
     */
    isDefaultShippingAddress: boolean | null;
}
export interface CreateUserAddress_accountAddressCreate_user_defaultBillingAddress_country {
    __typename: "CountryDisplay";
    /**
     * Country code.
     */
    code: string;
    /**
     * Country name.
     */
    country: string;
}
export interface CreateUserAddress_accountAddressCreate_user_defaultBillingAddress {
    __typename: "Address";
    /**
     * The ID of the object.
     */
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    /**
     * Shop's default country.
     */
    country: CreateUserAddress_accountAddressCreate_user_defaultBillingAddress_country;
    countryArea: string;
    phone: string | null;
    /**
     * Address is user's default billing address.
     */
    isDefaultBillingAddress: boolean | null;
    /**
     * Address is user's default shipping address.
     */
    isDefaultShippingAddress: boolean | null;
}
export interface CreateUserAddress_accountAddressCreate_user_addresses_country {
    __typename: "CountryDisplay";
    /**
     * Country code.
     */
    code: string;
    /**
     * Country name.
     */
    country: string;
}
export interface CreateUserAddress_accountAddressCreate_user_addresses {
    __typename: "Address";
    /**
     * The ID of the object.
     */
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    /**
     * Shop's default country.
     */
    country: CreateUserAddress_accountAddressCreate_user_addresses_country;
    countryArea: string;
    phone: string | null;
    /**
     * Address is user's default billing address.
     */
    isDefaultBillingAddress: boolean | null;
    /**
     * Address is user's default shipping address.
     */
    isDefaultShippingAddress: boolean | null;
}
export interface CreateUserAddress_accountAddressCreate_user {
    __typename: "User";
    /**
     * The ID of the object.
     */
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isStaff: boolean;
    defaultShippingAddress: CreateUserAddress_accountAddressCreate_user_defaultShippingAddress | null;
    defaultBillingAddress: CreateUserAddress_accountAddressCreate_user_defaultBillingAddress | null;
    /**
     * List of all user's addresses.
     */
    addresses: (CreateUserAddress_accountAddressCreate_user_addresses | null)[] | null;
}
export interface CreateUserAddress_accountAddressCreate {
    __typename: "AccountAddressCreate";
    errors: CreateUserAddress_accountAddressCreate_errors[];
    /**
     * A user instance for which the address was created.
     */
    user: CreateUserAddress_accountAddressCreate_user | null;
}
export interface CreateUserAddress {
    /**
     * Create a new address for the customer.
     */
    accountAddressCreate: CreateUserAddress_accountAddressCreate | null;
}
export interface CreateUserAddressVariables {
    input: AddressInput;
}
