export interface Payment_creditCard {
    __typename: "CreditCard";
    /**
     * Card brand.
     */
    brand: string;
    /**
     * First 4 digits of the card number.
     */
    firstDigits: string | null;
    /**
     * Last 4 digits of the card number.
     */
    lastDigits: string;
    /**
     * Two-digit number representing the card’s expiration month.
     */
    expMonth: number | null;
    /**
     * Four-digit number representing the card’s expiration year.
     */
    expYear: number | null;
}
export interface Payment_total {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface Payment {
    __typename: "Payment";
    /**
     * The ID of the object.
     */
    id: string;
    gateway: string;
    token: string;
    /**
     * The details of the card used for this payment.
     */
    creditCard: Payment_creditCard | null;
    /**
     * Total amount of the payment.
     */
    total: Payment_total | null;
}
