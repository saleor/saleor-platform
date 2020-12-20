import BaseDetails, { MapQueryData } from "../../helpers/BaseDetails";
import { CollectionDetails as CollectionDetailsQuery, CollectionDetailsVariables } from "../../queries/gqlTypes/CollectionDetails";
import { CollectionDetails as Collection } from "../../fragments/gqlTypes/CollectionDetails";
export declare class CollectionDetails extends BaseDetails<CollectionDetailsQuery, Collection, CollectionDetailsVariables> {
    mapQueryData: MapQueryData<CollectionDetailsQuery, Collection>;
    query: (variables: CollectionDetailsVariables) => Promise<import("apollo-client").ApolloQueryResult<CollectionDetailsQuery>>;
}
