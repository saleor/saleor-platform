/**
 * An enumeration.
 */
export declare enum AccountErrorCode {
    ACTIVATE_OWN_ACCOUNT = "ACTIVATE_OWN_ACCOUNT",
    ACTIVATE_SUPERUSER_ACCOUNT = "ACTIVATE_SUPERUSER_ACCOUNT",
    DEACTIVATE_OWN_ACCOUNT = "DEACTIVATE_OWN_ACCOUNT",
    DEACTIVATE_SUPERUSER_ACCOUNT = "DEACTIVATE_SUPERUSER_ACCOUNT",
    DELETE_NON_STAFF_USER = "DELETE_NON_STAFF_USER",
    DELETE_OWN_ACCOUNT = "DELETE_OWN_ACCOUNT",
    DELETE_STAFF_ACCOUNT = "DELETE_STAFF_ACCOUNT",
    DELETE_SUPERUSER_ACCOUNT = "DELETE_SUPERUSER_ACCOUNT",
    DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
    GRAPHQL_ERROR = "GRAPHQL_ERROR",
    INVALID = "INVALID",
    INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
    INVALID_PASSWORD = "INVALID_PASSWORD",
    JWT_DECODE_ERROR = "JWT_DECODE_ERROR",
    JWT_INVALID_CSRF_TOKEN = "JWT_INVALID_CSRF_TOKEN",
    JWT_INVALID_TOKEN = "JWT_INVALID_TOKEN",
    JWT_MISSING_TOKEN = "JWT_MISSING_TOKEN",
    JWT_SIGNATURE_EXPIRED = "JWT_SIGNATURE_EXPIRED",
    LEFT_NOT_MANAGEABLE_PERMISSION = "LEFT_NOT_MANAGEABLE_PERMISSION",
    NOT_FOUND = "NOT_FOUND",
    OUT_OF_SCOPE_GROUP = "OUT_OF_SCOPE_GROUP",
    OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
    OUT_OF_SCOPE_SERVICE_ACCOUNT = "OUT_OF_SCOPE_SERVICE_ACCOUNT",
    OUT_OF_SCOPE_USER = "OUT_OF_SCOPE_USER",
    PASSWORD_ENTIRELY_NUMERIC = "PASSWORD_ENTIRELY_NUMERIC",
    PASSWORD_TOO_COMMON = "PASSWORD_TOO_COMMON",
    PASSWORD_TOO_SHORT = "PASSWORD_TOO_SHORT",
    PASSWORD_TOO_SIMILAR = "PASSWORD_TOO_SIMILAR",
    REQUIRED = "REQUIRED",
    UNIQUE = "UNIQUE"
}
/**
 * An enumeration.
 */
export declare enum AddressTypeEnum {
    BILLING = "BILLING",
    SHIPPING = "SHIPPING"
}
/**
 * An enumeration.
 */
export declare enum CheckoutErrorCode {
    BILLING_ADDRESS_NOT_SET = "BILLING_ADDRESS_NOT_SET",
    CHECKOUT_NOT_FULLY_PAID = "CHECKOUT_NOT_FULLY_PAID",
    GRAPHQL_ERROR = "GRAPHQL_ERROR",
    INSUFFICIENT_STOCK = "INSUFFICIENT_STOCK",
    INVALID = "INVALID",
    INVALID_SHIPPING_METHOD = "INVALID_SHIPPING_METHOD",
    NOT_FOUND = "NOT_FOUND",
    PAYMENT_ERROR = "PAYMENT_ERROR",
    PRODUCT_NOT_PUBLISHED = "PRODUCT_NOT_PUBLISHED",
    PRODUCT_UNAVAILABLE_FOR_PURCHASE = "PRODUCT_UNAVAILABLE_FOR_PURCHASE",
    QUANTITY_GREATER_THAN_LIMIT = "QUANTITY_GREATER_THAN_LIMIT",
    REQUIRED = "REQUIRED",
    SHIPPING_ADDRESS_NOT_SET = "SHIPPING_ADDRESS_NOT_SET",
    SHIPPING_METHOD_NOT_APPLICABLE = "SHIPPING_METHOD_NOT_APPLICABLE",
    SHIPPING_METHOD_NOT_SET = "SHIPPING_METHOD_NOT_SET",
    SHIPPING_NOT_REQUIRED = "SHIPPING_NOT_REQUIRED",
    TAX_ERROR = "TAX_ERROR",
    UNIQUE = "UNIQUE",
    VOUCHER_NOT_APPLICABLE = "VOUCHER_NOT_APPLICABLE",
    ZERO_QUANTITY = "ZERO_QUANTITY"
}
export declare enum CollectionPublished {
    HIDDEN = "HIDDEN",
    PUBLISHED = "PUBLISHED"
}
export declare enum CollectionSortField {
    AVAILABILITY = "AVAILABILITY",
    NAME = "NAME",
    PRODUCT_COUNT = "PRODUCT_COUNT"
}
/**
 * An enumeration.
 */
export declare enum CountryCode {
    AD = "AD",
    AE = "AE",
    AF = "AF",
    AG = "AG",
    AI = "AI",
    AL = "AL",
    AM = "AM",
    AO = "AO",
    AQ = "AQ",
    AR = "AR",
    AS = "AS",
    AT = "AT",
    AU = "AU",
    AW = "AW",
    AX = "AX",
    AZ = "AZ",
    BA = "BA",
    BB = "BB",
    BD = "BD",
    BE = "BE",
    BF = "BF",
    BG = "BG",
    BH = "BH",
    BI = "BI",
    BJ = "BJ",
    BL = "BL",
    BM = "BM",
    BN = "BN",
    BO = "BO",
    BQ = "BQ",
    BR = "BR",
    BS = "BS",
    BT = "BT",
    BV = "BV",
    BW = "BW",
    BY = "BY",
    BZ = "BZ",
    CA = "CA",
    CC = "CC",
    CD = "CD",
    CF = "CF",
    CG = "CG",
    CH = "CH",
    CI = "CI",
    CK = "CK",
    CL = "CL",
    CM = "CM",
    CN = "CN",
    CO = "CO",
    CR = "CR",
    CU = "CU",
    CV = "CV",
    CW = "CW",
    CX = "CX",
    CY = "CY",
    CZ = "CZ",
    DE = "DE",
    DJ = "DJ",
    DK = "DK",
    DM = "DM",
    DO = "DO",
    DZ = "DZ",
    EC = "EC",
    EE = "EE",
    EG = "EG",
    EH = "EH",
    ER = "ER",
    ES = "ES",
    ET = "ET",
    EU = "EU",
    FI = "FI",
    FJ = "FJ",
    FK = "FK",
    FM = "FM",
    FO = "FO",
    FR = "FR",
    GA = "GA",
    GB = "GB",
    GD = "GD",
    GE = "GE",
    GF = "GF",
    GG = "GG",
    GH = "GH",
    GI = "GI",
    GL = "GL",
    GM = "GM",
    GN = "GN",
    GP = "GP",
    GQ = "GQ",
    GR = "GR",
    GS = "GS",
    GT = "GT",
    GU = "GU",
    GW = "GW",
    GY = "GY",
    HK = "HK",
    HM = "HM",
    HN = "HN",
    HR = "HR",
    HT = "HT",
    HU = "HU",
    ID = "ID",
    IE = "IE",
    IL = "IL",
    IM = "IM",
    IN = "IN",
    IO = "IO",
    IQ = "IQ",
    IR = "IR",
    IS = "IS",
    IT = "IT",
    JE = "JE",
    JM = "JM",
    JO = "JO",
    JP = "JP",
    KE = "KE",
    KG = "KG",
    KH = "KH",
    KI = "KI",
    KM = "KM",
    KN = "KN",
    KP = "KP",
    KR = "KR",
    KW = "KW",
    KY = "KY",
    KZ = "KZ",
    LA = "LA",
    LB = "LB",
    LC = "LC",
    LI = "LI",
    LK = "LK",
    LR = "LR",
    LS = "LS",
    LT = "LT",
    LU = "LU",
    LV = "LV",
    LY = "LY",
    MA = "MA",
    MC = "MC",
    MD = "MD",
    ME = "ME",
    MF = "MF",
    MG = "MG",
    MH = "MH",
    MK = "MK",
    ML = "ML",
    MM = "MM",
    MN = "MN",
    MO = "MO",
    MP = "MP",
    MQ = "MQ",
    MR = "MR",
    MS = "MS",
    MT = "MT",
    MU = "MU",
    MV = "MV",
    MW = "MW",
    MX = "MX",
    MY = "MY",
    MZ = "MZ",
    NA = "NA",
    NC = "NC",
    NE = "NE",
    NF = "NF",
    NG = "NG",
    NI = "NI",
    NL = "NL",
    NO = "NO",
    NP = "NP",
    NR = "NR",
    NU = "NU",
    NZ = "NZ",
    OM = "OM",
    PA = "PA",
    PE = "PE",
    PF = "PF",
    PG = "PG",
    PH = "PH",
    PK = "PK",
    PL = "PL",
    PM = "PM",
    PN = "PN",
    PR = "PR",
    PS = "PS",
    PT = "PT",
    PW = "PW",
    PY = "PY",
    QA = "QA",
    RE = "RE",
    RO = "RO",
    RS = "RS",
    RU = "RU",
    RW = "RW",
    SA = "SA",
    SB = "SB",
    SC = "SC",
    SD = "SD",
    SE = "SE",
    SG = "SG",
    SH = "SH",
    SI = "SI",
    SJ = "SJ",
    SK = "SK",
    SL = "SL",
    SM = "SM",
    SN = "SN",
    SO = "SO",
    SR = "SR",
    SS = "SS",
    ST = "ST",
    SV = "SV",
    SX = "SX",
    SY = "SY",
    SZ = "SZ",
    TC = "TC",
    TD = "TD",
    TF = "TF",
    TG = "TG",
    TH = "TH",
    TJ = "TJ",
    TK = "TK",
    TL = "TL",
    TM = "TM",
    TN = "TN",
    TO = "TO",
    TR = "TR",
    TT = "TT",
    TV = "TV",
    TW = "TW",
    TZ = "TZ",
    UA = "UA",
    UG = "UG",
    UM = "UM",
    US = "US",
    UY = "UY",
    UZ = "UZ",
    VA = "VA",
    VC = "VC",
    VE = "VE",
    VG = "VG",
    VI = "VI",
    VN = "VN",
    VU = "VU",
    WF = "WF",
    WS = "WS",
    YE = "YE",
    YT = "YT",
    ZA = "ZA",
    ZM = "ZM",
    ZW = "ZW"
}
/**
 * An enumeration.
 */
export declare enum JobStatusEnum {
    DELETED = "DELETED",
    FAILED = "FAILED",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS"
}
export declare enum OrderDirection {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * An enumeration.
 */
export declare enum OrderStatus {
    CANCELED = "CANCELED",
    DRAFT = "DRAFT",
    FULFILLED = "FULFILLED",
    PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
    UNFULFILLED = "UNFULFILLED"
}
/**
 * An enumeration.
 */
export declare enum PaymentChargeStatusEnum {
    CANCELLED = "CANCELLED",
    FULLY_CHARGED = "FULLY_CHARGED",
    FULLY_REFUNDED = "FULLY_REFUNDED",
    NOT_CHARGED = "NOT_CHARGED",
    PARTIALLY_CHARGED = "PARTIALLY_CHARGED",
    PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
    PENDING = "PENDING",
    REFUSED = "REFUSED"
}
/**
 * An enumeration.
 */
export declare enum PaymentErrorCode {
    BILLING_ADDRESS_NOT_SET = "BILLING_ADDRESS_NOT_SET",
    GRAPHQL_ERROR = "GRAPHQL_ERROR",
    INVALID = "INVALID",
    INVALID_SHIPPING_METHOD = "INVALID_SHIPPING_METHOD",
    NOT_FOUND = "NOT_FOUND",
    NOT_SUPPORTED_GATEWAY = "NOT_SUPPORTED_GATEWAY",
    PARTIAL_PAYMENT_NOT_ALLOWED = "PARTIAL_PAYMENT_NOT_ALLOWED",
    PAYMENT_ERROR = "PAYMENT_ERROR",
    REQUIRED = "REQUIRED",
    SHIPPING_ADDRESS_NOT_SET = "SHIPPING_ADDRESS_NOT_SET",
    SHIPPING_METHOD_NOT_SET = "SHIPPING_METHOD_NOT_SET",
    UNIQUE = "UNIQUE"
}
export declare enum ProductOrderField {
    DATE = "DATE",
    MINIMAL_PRICE = "MINIMAL_PRICE",
    NAME = "NAME",
    PRICE = "PRICE",
    PUBLISHED = "PUBLISHED",
    TYPE = "TYPE"
}
export declare enum StockAvailability {
    IN_STOCK = "IN_STOCK",
    OUT_OF_STOCK = "OUT_OF_STOCK"
}
export interface AccountInput {
    firstName?: string | null;
    lastName?: string | null;
    defaultBillingAddress?: AddressInput | null;
    defaultShippingAddress?: AddressInput | null;
}
export interface AddressInput {
    firstName?: string | null;
    lastName?: string | null;
    companyName?: string | null;
    streetAddress1?: string | null;
    streetAddress2?: string | null;
    city?: string | null;
    cityArea?: string | null;
    postalCode?: string | null;
    country?: CountryCode | null;
    countryArea?: string | null;
    phone?: string | null;
}
export interface AttributeInput {
    slug: string;
    value?: string | null;
    values?: (string | null)[] | null;
}
export interface CheckoutCreateInput {
    lines: (CheckoutLineInput | null)[];
    email?: string | null;
    shippingAddress?: AddressInput | null;
    billingAddress?: AddressInput | null;
}
export interface CheckoutLineInput {
    quantity: number;
    variantId: string;
}
export interface CollectionFilterInput {
    published?: CollectionPublished | null;
    search?: string | null;
    ids?: (string | null)[] | null;
}
export interface CollectionSortingInput {
    direction: OrderDirection;
    field: CollectionSortField;
}
export interface IntRangeInput {
    gte?: number | null;
    lte?: number | null;
}
export interface PaymentInput {
    gateway: string;
    token?: string | null;
    amount?: any | null;
    billingAddress?: AddressInput | null;
    returnUrl?: string | null;
}
export interface PriceRangeInput {
    gte?: number | null;
    lte?: number | null;
}
export interface ProductFilterInput {
    isPublished?: boolean | null;
    collections?: (string | null)[] | null;
    categories?: (string | null)[] | null;
    hasCategory?: boolean | null;
    attributes?: (AttributeInput | null)[] | null;
    stockAvailability?: StockAvailability | null;
    productType?: string | null;
    stocks?: ProductStockFilterInput | null;
    search?: string | null;
    price?: PriceRangeInput | null;
    minimalPrice?: PriceRangeInput | null;
    productTypes?: (string | null)[] | null;
}
export interface ProductOrder {
    direction: OrderDirection;
    attributeId?: string | null;
    field?: ProductOrderField | null;
}
export interface ProductStockFilterInput {
    warehouseIds?: string[] | null;
    quantity?: IntRangeInput | null;
}
