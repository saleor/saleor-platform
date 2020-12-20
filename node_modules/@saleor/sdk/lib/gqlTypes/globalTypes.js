"use strict";
/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockAvailability = exports.ProductOrderField = exports.PaymentErrorCode = exports.PaymentChargeStatusEnum = exports.OrderStatus = exports.OrderDirection = exports.JobStatusEnum = exports.CountryCode = exports.CollectionSortField = exports.CollectionPublished = exports.CheckoutErrorCode = exports.AddressTypeEnum = exports.AccountErrorCode = void 0;
//==============================================================
// START Enums and Input Objects
//==============================================================
/**
 * An enumeration.
 */
var AccountErrorCode;
(function (AccountErrorCode) {
    AccountErrorCode["ACTIVATE_OWN_ACCOUNT"] = "ACTIVATE_OWN_ACCOUNT";
    AccountErrorCode["ACTIVATE_SUPERUSER_ACCOUNT"] = "ACTIVATE_SUPERUSER_ACCOUNT";
    AccountErrorCode["DEACTIVATE_OWN_ACCOUNT"] = "DEACTIVATE_OWN_ACCOUNT";
    AccountErrorCode["DEACTIVATE_SUPERUSER_ACCOUNT"] = "DEACTIVATE_SUPERUSER_ACCOUNT";
    AccountErrorCode["DELETE_NON_STAFF_USER"] = "DELETE_NON_STAFF_USER";
    AccountErrorCode["DELETE_OWN_ACCOUNT"] = "DELETE_OWN_ACCOUNT";
    AccountErrorCode["DELETE_STAFF_ACCOUNT"] = "DELETE_STAFF_ACCOUNT";
    AccountErrorCode["DELETE_SUPERUSER_ACCOUNT"] = "DELETE_SUPERUSER_ACCOUNT";
    AccountErrorCode["DUPLICATED_INPUT_ITEM"] = "DUPLICATED_INPUT_ITEM";
    AccountErrorCode["GRAPHQL_ERROR"] = "GRAPHQL_ERROR";
    AccountErrorCode["INVALID"] = "INVALID";
    AccountErrorCode["INVALID_CREDENTIALS"] = "INVALID_CREDENTIALS";
    AccountErrorCode["INVALID_PASSWORD"] = "INVALID_PASSWORD";
    AccountErrorCode["JWT_DECODE_ERROR"] = "JWT_DECODE_ERROR";
    AccountErrorCode["JWT_INVALID_CSRF_TOKEN"] = "JWT_INVALID_CSRF_TOKEN";
    AccountErrorCode["JWT_INVALID_TOKEN"] = "JWT_INVALID_TOKEN";
    AccountErrorCode["JWT_MISSING_TOKEN"] = "JWT_MISSING_TOKEN";
    AccountErrorCode["JWT_SIGNATURE_EXPIRED"] = "JWT_SIGNATURE_EXPIRED";
    AccountErrorCode["LEFT_NOT_MANAGEABLE_PERMISSION"] = "LEFT_NOT_MANAGEABLE_PERMISSION";
    AccountErrorCode["NOT_FOUND"] = "NOT_FOUND";
    AccountErrorCode["OUT_OF_SCOPE_GROUP"] = "OUT_OF_SCOPE_GROUP";
    AccountErrorCode["OUT_OF_SCOPE_PERMISSION"] = "OUT_OF_SCOPE_PERMISSION";
    AccountErrorCode["OUT_OF_SCOPE_SERVICE_ACCOUNT"] = "OUT_OF_SCOPE_SERVICE_ACCOUNT";
    AccountErrorCode["OUT_OF_SCOPE_USER"] = "OUT_OF_SCOPE_USER";
    AccountErrorCode["PASSWORD_ENTIRELY_NUMERIC"] = "PASSWORD_ENTIRELY_NUMERIC";
    AccountErrorCode["PASSWORD_TOO_COMMON"] = "PASSWORD_TOO_COMMON";
    AccountErrorCode["PASSWORD_TOO_SHORT"] = "PASSWORD_TOO_SHORT";
    AccountErrorCode["PASSWORD_TOO_SIMILAR"] = "PASSWORD_TOO_SIMILAR";
    AccountErrorCode["REQUIRED"] = "REQUIRED";
    AccountErrorCode["UNIQUE"] = "UNIQUE";
})(AccountErrorCode = exports.AccountErrorCode || (exports.AccountErrorCode = {}));
/**
 * An enumeration.
 */
var AddressTypeEnum;
(function (AddressTypeEnum) {
    AddressTypeEnum["BILLING"] = "BILLING";
    AddressTypeEnum["SHIPPING"] = "SHIPPING";
})(AddressTypeEnum = exports.AddressTypeEnum || (exports.AddressTypeEnum = {}));
/**
 * An enumeration.
 */
var CheckoutErrorCode;
(function (CheckoutErrorCode) {
    CheckoutErrorCode["BILLING_ADDRESS_NOT_SET"] = "BILLING_ADDRESS_NOT_SET";
    CheckoutErrorCode["CHECKOUT_NOT_FULLY_PAID"] = "CHECKOUT_NOT_FULLY_PAID";
    CheckoutErrorCode["GRAPHQL_ERROR"] = "GRAPHQL_ERROR";
    CheckoutErrorCode["INSUFFICIENT_STOCK"] = "INSUFFICIENT_STOCK";
    CheckoutErrorCode["INVALID"] = "INVALID";
    CheckoutErrorCode["INVALID_SHIPPING_METHOD"] = "INVALID_SHIPPING_METHOD";
    CheckoutErrorCode["NOT_FOUND"] = "NOT_FOUND";
    CheckoutErrorCode["PAYMENT_ERROR"] = "PAYMENT_ERROR";
    CheckoutErrorCode["PRODUCT_NOT_PUBLISHED"] = "PRODUCT_NOT_PUBLISHED";
    CheckoutErrorCode["PRODUCT_UNAVAILABLE_FOR_PURCHASE"] = "PRODUCT_UNAVAILABLE_FOR_PURCHASE";
    CheckoutErrorCode["QUANTITY_GREATER_THAN_LIMIT"] = "QUANTITY_GREATER_THAN_LIMIT";
    CheckoutErrorCode["REQUIRED"] = "REQUIRED";
    CheckoutErrorCode["SHIPPING_ADDRESS_NOT_SET"] = "SHIPPING_ADDRESS_NOT_SET";
    CheckoutErrorCode["SHIPPING_METHOD_NOT_APPLICABLE"] = "SHIPPING_METHOD_NOT_APPLICABLE";
    CheckoutErrorCode["SHIPPING_METHOD_NOT_SET"] = "SHIPPING_METHOD_NOT_SET";
    CheckoutErrorCode["SHIPPING_NOT_REQUIRED"] = "SHIPPING_NOT_REQUIRED";
    CheckoutErrorCode["TAX_ERROR"] = "TAX_ERROR";
    CheckoutErrorCode["UNIQUE"] = "UNIQUE";
    CheckoutErrorCode["VOUCHER_NOT_APPLICABLE"] = "VOUCHER_NOT_APPLICABLE";
    CheckoutErrorCode["ZERO_QUANTITY"] = "ZERO_QUANTITY";
})(CheckoutErrorCode = exports.CheckoutErrorCode || (exports.CheckoutErrorCode = {}));
var CollectionPublished;
(function (CollectionPublished) {
    CollectionPublished["HIDDEN"] = "HIDDEN";
    CollectionPublished["PUBLISHED"] = "PUBLISHED";
})(CollectionPublished = exports.CollectionPublished || (exports.CollectionPublished = {}));
var CollectionSortField;
(function (CollectionSortField) {
    CollectionSortField["AVAILABILITY"] = "AVAILABILITY";
    CollectionSortField["NAME"] = "NAME";
    CollectionSortField["PRODUCT_COUNT"] = "PRODUCT_COUNT";
})(CollectionSortField = exports.CollectionSortField || (exports.CollectionSortField = {}));
/**
 * An enumeration.
 */
var CountryCode;
(function (CountryCode) {
    CountryCode["AD"] = "AD";
    CountryCode["AE"] = "AE";
    CountryCode["AF"] = "AF";
    CountryCode["AG"] = "AG";
    CountryCode["AI"] = "AI";
    CountryCode["AL"] = "AL";
    CountryCode["AM"] = "AM";
    CountryCode["AO"] = "AO";
    CountryCode["AQ"] = "AQ";
    CountryCode["AR"] = "AR";
    CountryCode["AS"] = "AS";
    CountryCode["AT"] = "AT";
    CountryCode["AU"] = "AU";
    CountryCode["AW"] = "AW";
    CountryCode["AX"] = "AX";
    CountryCode["AZ"] = "AZ";
    CountryCode["BA"] = "BA";
    CountryCode["BB"] = "BB";
    CountryCode["BD"] = "BD";
    CountryCode["BE"] = "BE";
    CountryCode["BF"] = "BF";
    CountryCode["BG"] = "BG";
    CountryCode["BH"] = "BH";
    CountryCode["BI"] = "BI";
    CountryCode["BJ"] = "BJ";
    CountryCode["BL"] = "BL";
    CountryCode["BM"] = "BM";
    CountryCode["BN"] = "BN";
    CountryCode["BO"] = "BO";
    CountryCode["BQ"] = "BQ";
    CountryCode["BR"] = "BR";
    CountryCode["BS"] = "BS";
    CountryCode["BT"] = "BT";
    CountryCode["BV"] = "BV";
    CountryCode["BW"] = "BW";
    CountryCode["BY"] = "BY";
    CountryCode["BZ"] = "BZ";
    CountryCode["CA"] = "CA";
    CountryCode["CC"] = "CC";
    CountryCode["CD"] = "CD";
    CountryCode["CF"] = "CF";
    CountryCode["CG"] = "CG";
    CountryCode["CH"] = "CH";
    CountryCode["CI"] = "CI";
    CountryCode["CK"] = "CK";
    CountryCode["CL"] = "CL";
    CountryCode["CM"] = "CM";
    CountryCode["CN"] = "CN";
    CountryCode["CO"] = "CO";
    CountryCode["CR"] = "CR";
    CountryCode["CU"] = "CU";
    CountryCode["CV"] = "CV";
    CountryCode["CW"] = "CW";
    CountryCode["CX"] = "CX";
    CountryCode["CY"] = "CY";
    CountryCode["CZ"] = "CZ";
    CountryCode["DE"] = "DE";
    CountryCode["DJ"] = "DJ";
    CountryCode["DK"] = "DK";
    CountryCode["DM"] = "DM";
    CountryCode["DO"] = "DO";
    CountryCode["DZ"] = "DZ";
    CountryCode["EC"] = "EC";
    CountryCode["EE"] = "EE";
    CountryCode["EG"] = "EG";
    CountryCode["EH"] = "EH";
    CountryCode["ER"] = "ER";
    CountryCode["ES"] = "ES";
    CountryCode["ET"] = "ET";
    CountryCode["EU"] = "EU";
    CountryCode["FI"] = "FI";
    CountryCode["FJ"] = "FJ";
    CountryCode["FK"] = "FK";
    CountryCode["FM"] = "FM";
    CountryCode["FO"] = "FO";
    CountryCode["FR"] = "FR";
    CountryCode["GA"] = "GA";
    CountryCode["GB"] = "GB";
    CountryCode["GD"] = "GD";
    CountryCode["GE"] = "GE";
    CountryCode["GF"] = "GF";
    CountryCode["GG"] = "GG";
    CountryCode["GH"] = "GH";
    CountryCode["GI"] = "GI";
    CountryCode["GL"] = "GL";
    CountryCode["GM"] = "GM";
    CountryCode["GN"] = "GN";
    CountryCode["GP"] = "GP";
    CountryCode["GQ"] = "GQ";
    CountryCode["GR"] = "GR";
    CountryCode["GS"] = "GS";
    CountryCode["GT"] = "GT";
    CountryCode["GU"] = "GU";
    CountryCode["GW"] = "GW";
    CountryCode["GY"] = "GY";
    CountryCode["HK"] = "HK";
    CountryCode["HM"] = "HM";
    CountryCode["HN"] = "HN";
    CountryCode["HR"] = "HR";
    CountryCode["HT"] = "HT";
    CountryCode["HU"] = "HU";
    CountryCode["ID"] = "ID";
    CountryCode["IE"] = "IE";
    CountryCode["IL"] = "IL";
    CountryCode["IM"] = "IM";
    CountryCode["IN"] = "IN";
    CountryCode["IO"] = "IO";
    CountryCode["IQ"] = "IQ";
    CountryCode["IR"] = "IR";
    CountryCode["IS"] = "IS";
    CountryCode["IT"] = "IT";
    CountryCode["JE"] = "JE";
    CountryCode["JM"] = "JM";
    CountryCode["JO"] = "JO";
    CountryCode["JP"] = "JP";
    CountryCode["KE"] = "KE";
    CountryCode["KG"] = "KG";
    CountryCode["KH"] = "KH";
    CountryCode["KI"] = "KI";
    CountryCode["KM"] = "KM";
    CountryCode["KN"] = "KN";
    CountryCode["KP"] = "KP";
    CountryCode["KR"] = "KR";
    CountryCode["KW"] = "KW";
    CountryCode["KY"] = "KY";
    CountryCode["KZ"] = "KZ";
    CountryCode["LA"] = "LA";
    CountryCode["LB"] = "LB";
    CountryCode["LC"] = "LC";
    CountryCode["LI"] = "LI";
    CountryCode["LK"] = "LK";
    CountryCode["LR"] = "LR";
    CountryCode["LS"] = "LS";
    CountryCode["LT"] = "LT";
    CountryCode["LU"] = "LU";
    CountryCode["LV"] = "LV";
    CountryCode["LY"] = "LY";
    CountryCode["MA"] = "MA";
    CountryCode["MC"] = "MC";
    CountryCode["MD"] = "MD";
    CountryCode["ME"] = "ME";
    CountryCode["MF"] = "MF";
    CountryCode["MG"] = "MG";
    CountryCode["MH"] = "MH";
    CountryCode["MK"] = "MK";
    CountryCode["ML"] = "ML";
    CountryCode["MM"] = "MM";
    CountryCode["MN"] = "MN";
    CountryCode["MO"] = "MO";
    CountryCode["MP"] = "MP";
    CountryCode["MQ"] = "MQ";
    CountryCode["MR"] = "MR";
    CountryCode["MS"] = "MS";
    CountryCode["MT"] = "MT";
    CountryCode["MU"] = "MU";
    CountryCode["MV"] = "MV";
    CountryCode["MW"] = "MW";
    CountryCode["MX"] = "MX";
    CountryCode["MY"] = "MY";
    CountryCode["MZ"] = "MZ";
    CountryCode["NA"] = "NA";
    CountryCode["NC"] = "NC";
    CountryCode["NE"] = "NE";
    CountryCode["NF"] = "NF";
    CountryCode["NG"] = "NG";
    CountryCode["NI"] = "NI";
    CountryCode["NL"] = "NL";
    CountryCode["NO"] = "NO";
    CountryCode["NP"] = "NP";
    CountryCode["NR"] = "NR";
    CountryCode["NU"] = "NU";
    CountryCode["NZ"] = "NZ";
    CountryCode["OM"] = "OM";
    CountryCode["PA"] = "PA";
    CountryCode["PE"] = "PE";
    CountryCode["PF"] = "PF";
    CountryCode["PG"] = "PG";
    CountryCode["PH"] = "PH";
    CountryCode["PK"] = "PK";
    CountryCode["PL"] = "PL";
    CountryCode["PM"] = "PM";
    CountryCode["PN"] = "PN";
    CountryCode["PR"] = "PR";
    CountryCode["PS"] = "PS";
    CountryCode["PT"] = "PT";
    CountryCode["PW"] = "PW";
    CountryCode["PY"] = "PY";
    CountryCode["QA"] = "QA";
    CountryCode["RE"] = "RE";
    CountryCode["RO"] = "RO";
    CountryCode["RS"] = "RS";
    CountryCode["RU"] = "RU";
    CountryCode["RW"] = "RW";
    CountryCode["SA"] = "SA";
    CountryCode["SB"] = "SB";
    CountryCode["SC"] = "SC";
    CountryCode["SD"] = "SD";
    CountryCode["SE"] = "SE";
    CountryCode["SG"] = "SG";
    CountryCode["SH"] = "SH";
    CountryCode["SI"] = "SI";
    CountryCode["SJ"] = "SJ";
    CountryCode["SK"] = "SK";
    CountryCode["SL"] = "SL";
    CountryCode["SM"] = "SM";
    CountryCode["SN"] = "SN";
    CountryCode["SO"] = "SO";
    CountryCode["SR"] = "SR";
    CountryCode["SS"] = "SS";
    CountryCode["ST"] = "ST";
    CountryCode["SV"] = "SV";
    CountryCode["SX"] = "SX";
    CountryCode["SY"] = "SY";
    CountryCode["SZ"] = "SZ";
    CountryCode["TC"] = "TC";
    CountryCode["TD"] = "TD";
    CountryCode["TF"] = "TF";
    CountryCode["TG"] = "TG";
    CountryCode["TH"] = "TH";
    CountryCode["TJ"] = "TJ";
    CountryCode["TK"] = "TK";
    CountryCode["TL"] = "TL";
    CountryCode["TM"] = "TM";
    CountryCode["TN"] = "TN";
    CountryCode["TO"] = "TO";
    CountryCode["TR"] = "TR";
    CountryCode["TT"] = "TT";
    CountryCode["TV"] = "TV";
    CountryCode["TW"] = "TW";
    CountryCode["TZ"] = "TZ";
    CountryCode["UA"] = "UA";
    CountryCode["UG"] = "UG";
    CountryCode["UM"] = "UM";
    CountryCode["US"] = "US";
    CountryCode["UY"] = "UY";
    CountryCode["UZ"] = "UZ";
    CountryCode["VA"] = "VA";
    CountryCode["VC"] = "VC";
    CountryCode["VE"] = "VE";
    CountryCode["VG"] = "VG";
    CountryCode["VI"] = "VI";
    CountryCode["VN"] = "VN";
    CountryCode["VU"] = "VU";
    CountryCode["WF"] = "WF";
    CountryCode["WS"] = "WS";
    CountryCode["YE"] = "YE";
    CountryCode["YT"] = "YT";
    CountryCode["ZA"] = "ZA";
    CountryCode["ZM"] = "ZM";
    CountryCode["ZW"] = "ZW";
})(CountryCode = exports.CountryCode || (exports.CountryCode = {}));
/**
 * An enumeration.
 */
var JobStatusEnum;
(function (JobStatusEnum) {
    JobStatusEnum["DELETED"] = "DELETED";
    JobStatusEnum["FAILED"] = "FAILED";
    JobStatusEnum["PENDING"] = "PENDING";
    JobStatusEnum["SUCCESS"] = "SUCCESS";
})(JobStatusEnum = exports.JobStatusEnum || (exports.JobStatusEnum = {}));
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["ASC"] = "ASC";
    OrderDirection["DESC"] = "DESC";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
/**
 * An enumeration.
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["CANCELED"] = "CANCELED";
    OrderStatus["DRAFT"] = "DRAFT";
    OrderStatus["FULFILLED"] = "FULFILLED";
    OrderStatus["PARTIALLY_FULFILLED"] = "PARTIALLY_FULFILLED";
    OrderStatus["UNFULFILLED"] = "UNFULFILLED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
/**
 * An enumeration.
 */
var PaymentChargeStatusEnum;
(function (PaymentChargeStatusEnum) {
    PaymentChargeStatusEnum["CANCELLED"] = "CANCELLED";
    PaymentChargeStatusEnum["FULLY_CHARGED"] = "FULLY_CHARGED";
    PaymentChargeStatusEnum["FULLY_REFUNDED"] = "FULLY_REFUNDED";
    PaymentChargeStatusEnum["NOT_CHARGED"] = "NOT_CHARGED";
    PaymentChargeStatusEnum["PARTIALLY_CHARGED"] = "PARTIALLY_CHARGED";
    PaymentChargeStatusEnum["PARTIALLY_REFUNDED"] = "PARTIALLY_REFUNDED";
    PaymentChargeStatusEnum["PENDING"] = "PENDING";
    PaymentChargeStatusEnum["REFUSED"] = "REFUSED";
})(PaymentChargeStatusEnum = exports.PaymentChargeStatusEnum || (exports.PaymentChargeStatusEnum = {}));
/**
 * An enumeration.
 */
var PaymentErrorCode;
(function (PaymentErrorCode) {
    PaymentErrorCode["BILLING_ADDRESS_NOT_SET"] = "BILLING_ADDRESS_NOT_SET";
    PaymentErrorCode["GRAPHQL_ERROR"] = "GRAPHQL_ERROR";
    PaymentErrorCode["INVALID"] = "INVALID";
    PaymentErrorCode["INVALID_SHIPPING_METHOD"] = "INVALID_SHIPPING_METHOD";
    PaymentErrorCode["NOT_FOUND"] = "NOT_FOUND";
    PaymentErrorCode["NOT_SUPPORTED_GATEWAY"] = "NOT_SUPPORTED_GATEWAY";
    PaymentErrorCode["PARTIAL_PAYMENT_NOT_ALLOWED"] = "PARTIAL_PAYMENT_NOT_ALLOWED";
    PaymentErrorCode["PAYMENT_ERROR"] = "PAYMENT_ERROR";
    PaymentErrorCode["REQUIRED"] = "REQUIRED";
    PaymentErrorCode["SHIPPING_ADDRESS_NOT_SET"] = "SHIPPING_ADDRESS_NOT_SET";
    PaymentErrorCode["SHIPPING_METHOD_NOT_SET"] = "SHIPPING_METHOD_NOT_SET";
    PaymentErrorCode["UNIQUE"] = "UNIQUE";
})(PaymentErrorCode = exports.PaymentErrorCode || (exports.PaymentErrorCode = {}));
var ProductOrderField;
(function (ProductOrderField) {
    ProductOrderField["DATE"] = "DATE";
    ProductOrderField["MINIMAL_PRICE"] = "MINIMAL_PRICE";
    ProductOrderField["NAME"] = "NAME";
    ProductOrderField["PRICE"] = "PRICE";
    ProductOrderField["PUBLISHED"] = "PUBLISHED";
    ProductOrderField["TYPE"] = "TYPE";
})(ProductOrderField = exports.ProductOrderField || (exports.ProductOrderField = {}));
var StockAvailability;
(function (StockAvailability) {
    StockAvailability["IN_STOCK"] = "IN_STOCK";
    StockAvailability["OUT_OF_STOCK"] = "OUT_OF_STOCK";
})(StockAvailability = exports.StockAvailability || (exports.StockAvailability = {}));
//==============================================================
// END Enums and Input Objects
//==============================================================
//# sourceMappingURL=globalTypes.js.map