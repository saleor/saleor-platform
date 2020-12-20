import { ApolloQueryResult } from "apollo-client";
import { PageInfo } from "../../fragments/gqlTypes/PageInfo";
export declare type GetBaseList<TQuery, TVariables> = (variables: TVariables) => Promise<ApolloQueryResult<TQuery>>;
export declare type MapQueryData<TQuery, TObject> = (data: TQuery) => TObject[] | undefined;
export interface BaseListVariables {
    after?: string | null;
    first: number;
}
export declare type GetPageInfo<TQuery> = (result: ApolloQueryResult<TQuery>) => PageInfo;
