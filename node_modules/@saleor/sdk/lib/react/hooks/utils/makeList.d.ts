import ApolloClient from "apollo-client";
import BaseList, { BaseListVariables } from "../../../helpers/BaseList";
export declare function makeList<TObject, TQuery, TVariables extends BaseListVariables>(createList: (client: ApolloClient<any>) => BaseList<TQuery, TObject, TVariables>): (variables: TVariables) => {
    current: Promise<import("apollo-client").ApolloQueryResult<TQuery>> | null | undefined;
    data: TObject[] | undefined;
    loading: boolean;
    next: () => Promise<void>;
    pageInfo: import("../../../fragments/gqlTypes/PageInfo").PageInfo | undefined;
};
