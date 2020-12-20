export interface ShippingMethod_price {
    __typename: "Money";
    /**
     * Currency code.
     */
    currency: string;
    /**
     * Amount of money.
     */
    amount: number;
}
export interface ShippingMethod {
    __typename: "ShippingMethod";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    price: ShippingMethod_price | null;
}
