import ApolloClient from "apollo-client";
import BaseDetails from "../../../helpers/BaseDetails";
export declare function makeDetails<TObject, TQuery, TVariables>(createDetails: (client: ApolloClient<any>) => BaseDetails<TQuery, TObject, TVariables>): (variables: TVariables) => {
    current: Promise<import("apollo-client").ApolloQueryResult<TQuery>> | null | undefined;
    data: TObject | undefined;
    loading: boolean;
};
