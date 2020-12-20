export interface OrderPrice_gross {
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
export interface OrderPrice_net {
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
export interface OrderPrice {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: OrderPrice_gross;
    /**
     * Amount of money without taxes.
     */
    net: OrderPrice_net;
}
