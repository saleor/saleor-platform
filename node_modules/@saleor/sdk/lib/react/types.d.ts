import { ApolloError } from "apollo-client";
import APIProxy from "../api/APIProxy";
export interface ApolloErrorWithUserInput extends ApolloError {
    extraInfo: {
        userInputErrors?: any[];
    };
}
export declare type Variables<T extends keyof APIProxy> = APIProxy[T] extends (variables: infer V, _: any) => any ? V : never;
export declare type Options<T extends keyof APIProxy> = APIProxy[T] extends (_: any, options: infer V) => any ? V : never;
export declare type ReturnData<T extends keyof APIProxy> = APIProxy[T] extends (...args: any) => Promise<infer V> ? V extends {
    data: any;
} ? V : never : never;
export declare type WatchQueryReturnData<T extends keyof APIProxy> = APIProxy[T] extends (_: any, options: infer O) => any ? O extends {
    onUpdate: (data: infer V) => any;
} ? V : never : never;
