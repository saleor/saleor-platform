import { ApolloQueryResult } from "apollo-client";
export declare type GetBaseDetails<TQuery, TVariables> = (variables: TVariables) => Promise<ApolloQueryResult<TQuery>>;
export declare type MapQueryData<TQuery, TObject> = (data: TQuery) => TObject | undefined;
