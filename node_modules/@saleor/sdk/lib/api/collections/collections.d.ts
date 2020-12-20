import ApolloClient from "apollo-client";
import { CollectionDetails as CollectionDetailsQuery, CollectionDetailsVariables } from "../../queries/gqlTypes/CollectionDetails";
import { CollectionDetails as CollectionDetailsFragment } from "../../fragments/gqlTypes/CollectionDetails";
import { CollectionList as CollectionListQuery, CollectionListVariables } from "../../queries/gqlTypes/CollectionList";
import { BaseCollection } from "../../fragments/gqlTypes/BaseCollection";
import { WithDetails, WithList } from "../types";
import { CollectionList } from "./CollectionList";
import { CollectionDetails } from "./CollectionDetails";
export declare class CollectionsAPI implements WithDetails<CollectionDetailsQuery, CollectionDetailsFragment, CollectionDetailsVariables>, WithList<CollectionListQuery, BaseCollection, CollectionListVariables> {
    private client;
    constructor(client: ApolloClient<any>);
    /**
     * Method returning collection details
     * @param variables Details parameters
     */
    getDetails: (variables: CollectionDetailsVariables) => Promise<CollectionDetails>;
    /**
     * Method returning list of collections with ability to request next page
     * @param params List parameters
     */
    getList: (variables: CollectionListVariables) => Promise<CollectionList>;
}
