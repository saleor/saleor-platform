export interface ProductDetails_thumbnail {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
    /**
     * Alt text for an image.
     */
    alt: string | null;
}
export interface ProductDetails_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface ProductDetails_pricing_priceRangeUndiscounted_start_gross {
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
export interface ProductDetails_pricing_priceRangeUndiscounted_start_net {
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
export interface ProductDetails_pricing_priceRangeUndiscounted_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductDetails_pricing_priceRangeUndiscounted_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductDetails_pricing_priceRangeUndiscounted_start_net;
}
export interface ProductDetails_pricing_priceRangeUndiscounted_stop_gross {
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
export interface ProductDetails_pricing_priceRangeUndiscounted_stop_net {
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
export interface ProductDetails_pricing_priceRangeUndiscounted_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductDetails_pricing_priceRangeUndiscounted_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductDetails_pricing_priceRangeUndiscounted_stop_net;
}
export interface ProductDetails_pricing_priceRangeUndiscounted {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: ProductDetails_pricing_priceRangeUndiscounted_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: ProductDetails_pricing_priceRangeUndiscounted_stop | null;
}
export interface ProductDetails_pricing_priceRange_start_gross {
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
export interface ProductDetails_pricing_priceRange_start_net {
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
export interface ProductDetails_pricing_priceRange_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductDetails_pricing_priceRange_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductDetails_pricing_priceRange_start_net;
}
export interface ProductDetails_pricing_priceRange_stop_gross {
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
export interface ProductDetails_pricing_priceRange_stop_net {
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
export interface ProductDetails_pricing_priceRange_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductDetails_pricing_priceRange_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductDetails_pricing_priceRange_stop_net;
}
export interface ProductDetails_pricing_priceRange {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: ProductDetails_pricing_priceRange_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: ProductDetails_pricing_priceRange_stop | null;
}
export interface ProductDetails_pricing {
    __typename: "ProductPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The undiscounted price range of the product variants.
     */
    priceRangeUndiscounted: ProductDetails_pricing_priceRangeUndiscounted | null;
    /**
     * The discounted price range of the product variants.
     */
    priceRange: ProductDetails_pricing_priceRange | null;
}
export interface ProductDetails_category_products_edges_node_thumbnail {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
    /**
     * Alt text for an image.
     */
    alt: string | null;
}
export interface ProductDetails_category_products_edges_node_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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
export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_net {
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
export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_net;
}
export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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
export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_net {
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
export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_net;
}
export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}
export interface ProductDetails_category_products_edges_node_pricing_priceRange_start_gross {
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
export interface ProductDetails_category_products_edges_node_pricing_priceRange_start_net {
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
export interface ProductDetails_category_products_edges_node_pricing_priceRange_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductDetails_category_products_edges_node_pricing_priceRange_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductDetails_category_products_edges_node_pricing_priceRange_start_net;
}
export interface ProductDetails_category_products_edges_node_pricing_priceRange_stop_gross {
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
export interface ProductDetails_category_products_edges_node_pricing_priceRange_stop_net {
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
export interface ProductDetails_category_products_edges_node_pricing_priceRange_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductDetails_category_products_edges_node_pricing_priceRange_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductDetails_category_products_edges_node_pricing_priceRange_stop_net;
}
export interface ProductDetails_category_products_edges_node_pricing_priceRange {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: ProductDetails_category_products_edges_node_pricing_priceRange_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: ProductDetails_category_products_edges_node_pricing_priceRange_stop | null;
}
export interface ProductDetails_category_products_edges_node_pricing {
    __typename: "ProductPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The undiscounted price range of the product variants.
     */
    priceRangeUndiscounted: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted | null;
    /**
     * The discounted price range of the product variants.
     */
    priceRange: ProductDetails_category_products_edges_node_pricing_priceRange | null;
}
export interface ProductDetails_category_products_edges_node_category {
    __typename: "Category";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
}
export interface ProductDetails_category_products_edges_node {
    __typename: "Product";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
    /**
     * The main thumbnail for a product.
     */
    thumbnail: ProductDetails_category_products_edges_node_thumbnail | null;
    /**
     * The main thumbnail for a product.
     */
    thumbnail2x: ProductDetails_category_products_edges_node_thumbnail2x | null;
    /**
     * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
     */
    pricing: ProductDetails_category_products_edges_node_pricing | null;
    category: ProductDetails_category_products_edges_node_category | null;
}
export interface ProductDetails_category_products_edges {
    __typename: "ProductCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: ProductDetails_category_products_edges_node;
}
export interface ProductDetails_category_products {
    __typename: "ProductCountableConnection";
    edges: ProductDetails_category_products_edges[];
}
export interface ProductDetails_category {
    __typename: "Category";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    /**
     * List of products in the category.
     */
    products: ProductDetails_category_products | null;
}
export interface ProductDetails_images {
    __typename: "ProductImage";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * The URL of the image.
     */
    url: string;
}
export interface ProductDetails_attributes_attribute {
    __typename: "Attribute";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * Name of an attribute displayed in the interface.
     */
    name: string | null;
    /**
     * Internal representation of an attribute name.
     */
    slug: string | null;
}
export interface ProductDetails_attributes_values {
    __typename: "AttributeValue";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * Name of a value displayed in the interface.
     */
    name: string | null;
}
export interface ProductDetails_attributes {
    __typename: "SelectedAttribute";
    /**
     * Name of an attribute displayed in the interface.
     */
    attribute: ProductDetails_attributes_attribute;
    /**
     * Values of an attribute.
     */
    values: (ProductDetails_attributes_values | null)[];
}
export interface ProductDetails_variants_images {
    __typename: "ProductImage";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * The URL of the image.
     */
    url: string;
    alt: string;
}
export interface ProductDetails_variants_pricing_priceUndiscounted_gross {
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
export interface ProductDetails_variants_pricing_priceUndiscounted_net {
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
export interface ProductDetails_variants_pricing_priceUndiscounted {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductDetails_variants_pricing_priceUndiscounted_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductDetails_variants_pricing_priceUndiscounted_net;
}
export interface ProductDetails_variants_pricing_price_gross {
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
export interface ProductDetails_variants_pricing_price_net {
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
export interface ProductDetails_variants_pricing_price {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductDetails_variants_pricing_price_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductDetails_variants_pricing_price_net;
}
export interface ProductDetails_variants_pricing {
    __typename: "VariantPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The price without any discount.
     */
    priceUndiscounted: ProductDetails_variants_pricing_priceUndiscounted | null;
    /**
     * The price, with any discount subtracted.
     */
    price: ProductDetails_variants_pricing_price | null;
}
export interface ProductDetails_variants_attributes_attribute {
    __typename: "Attribute";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * Name of an attribute displayed in the interface.
     */
    name: string | null;
    /**
     * Internal representation of an attribute name.
     */
    slug: string | null;
}
export interface ProductDetails_variants_attributes_values {
    __typename: "AttributeValue";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * Name of a value displayed in the interface.
     */
    name: string | null;
    /**
     * Name of a value displayed in the interface.
     */
    value: string | null;
}
export interface ProductDetails_variants_attributes {
    __typename: "SelectedAttribute";
    /**
     * Name of an attribute displayed in the interface.
     */
    attribute: ProductDetails_variants_attributes_attribute;
    /**
     * Values of an attribute.
     */
    values: (ProductDetails_variants_attributes_values | null)[];
}
export interface ProductDetails_variants {
    __typename: "ProductVariant";
    /**
     * The ID of the object.
     */
    id: string;
    sku: string;
    name: string;
    /**
     * Quantity of a product available for sale in one checkout.
     */
    quantityAvailable: number;
    /**
     * Whether the variant is in stock and visible or not.
     */
    isAvailable: boolean | null;
    /**
     * List of images for the product variant.
     */
    images: (ProductDetails_variants_images | null)[] | null;
    /**
     * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
     */
    pricing: ProductDetails_variants_pricing | null;
    /**
     * List of attributes assigned to this variant.
     */
    attributes: ProductDetails_variants_attributes[];
}
export interface ProductDetails {
    __typename: "Product";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
    /**
     * The main thumbnail for a product.
     */
    thumbnail: ProductDetails_thumbnail | null;
    /**
     * The main thumbnail for a product.
     */
    thumbnail2x: ProductDetails_thumbnail2x | null;
    /**
     * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
     */
    pricing: ProductDetails_pricing | null;
    descriptionJson: any;
    category: ProductDetails_category | null;
    /**
     * List of images for the product.
     */
    images: (ProductDetails_images | null)[] | null;
    /**
     * List of attributes assigned to this product.
     */
    attributes: ProductDetails_attributes[];
    /**
     * List of variants for the product.
     */
    variants: (ProductDetails_variants | null)[] | null;
    /**
     * Whether the product is in stock and visible or not.
     */
    isAvailable: boolean | null;
}
