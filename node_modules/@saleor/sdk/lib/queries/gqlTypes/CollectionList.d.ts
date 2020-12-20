import { CollectionSortingInput, CollectionFilterInput } from "./../../gqlTypes/globalTypes";
export interface CollectionList_collections_edges_node {
    __typename: "Collection";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
}
export interface CollectionList_collections_edges {
    __typename: "CollectionCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: CollectionList_collections_edges_node;
}
export interface CollectionList_collections_pageInfo {
    __typename: "PageInfo";
    /**
     * When paginating forwards, the cursor to continue.
     */
    endCursor: string | null;
    /**
     * When paginating forwards, are there more items?
     */
    hasNextPage: boolean;
}
export interface CollectionList_collections {
    __typename: "CollectionCountableConnection";
    edges: CollectionList_collections_edges[];
    /**
     * Pagination data for this connection.
     */
    pageInfo: CollectionList_collections_pageInfo;
}
export interface CollectionList {
    /**
     * List of the shop's collections.
     */
    collections: CollectionList_collections | null;
}
export interface CollectionListVariables {
    first: number;
    after?: string | null;
    sortBy?: CollectionSortingInput | null;
    filter?: CollectionFilterInput | null;
}
