import { MapFn, QueryShape, WatchMapFn } from "./types";
export declare const getErrorsFromData: <T extends {
    [key: string]: any;
}>(data: T) => {} | null;
export declare const isDataEmpty: <T extends {
    [key: string]: any;
}>(data: T) => boolean;
export declare function getMappedData<T extends QueryShape, TResult>(mapFn: MapFn<T, TResult> | WatchMapFn<T, TResult>, data: any): TResult | null;
export declare const mergeEdges: (prevEdges: any[], newEdges: any[]) => any[];
export declare function filterNotEmptyArrayItems<TValue>(value: TValue | null | undefined): value is TValue;
export declare function findValueInEnum<TEnum extends object>(needle: string, haystack: TEnum): TEnum[keyof TEnum];
