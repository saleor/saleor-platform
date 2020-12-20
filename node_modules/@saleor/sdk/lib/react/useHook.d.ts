import { SaleorAPI } from "../api";
export declare const hookFactory: <T extends "auth" | "checkout" | "cart" | "categories" | "collections" | "products" | "legacyAPIProxy">(query: T) => () => SaleorAPI[T];
