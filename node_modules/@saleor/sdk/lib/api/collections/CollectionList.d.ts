import BaseList, { GetPageInfo, MapQueryData } from "../../helpers/BaseList";
import { CollectionList as CollectionListQuery, CollectionListVariables } from "../../queries/gqlTypes/CollectionList";
import { BaseCollection } from "../../fragments/gqlTypes/BaseCollection";
export declare class CollectionList extends BaseList<CollectionListQuery, BaseCollection, CollectionListVariables> {
    getPageInfo: GetPageInfo<CollectionListQuery>;
    mapQueryData: MapQueryData<CollectionListQuery, BaseCollection>;
    query: (variables: CollectionListVariables) => Promise<import("apollo-client").ApolloQueryResult<CollectionListQuery>>;
}
