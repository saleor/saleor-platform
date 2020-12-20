export interface CategoryAncestorsList_category_ancestors_edges_node {
    __typename: "Category";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
}
export interface CategoryAncestorsList_category_ancestors_edges {
    __typename: "CategoryCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: CategoryAncestorsList_category_ancestors_edges_node;
}
export interface CategoryAncestorsList_category_ancestors_pageInfo {
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
export interface CategoryAncestorsList_category_ancestors {
    __typename: "CategoryCountableConnection";
    edges: CategoryAncestorsList_category_ancestors_edges[];
    /**
     * Pagination data for this connection.
     */
    pageInfo: CategoryAncestorsList_category_ancestors_pageInfo;
}
export interface CategoryAncestorsList_category {
    __typename: "Category";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * List of ancestors of the category.
     */
    ancestors: CategoryAncestorsList_category_ancestors | null;
}
export interface CategoryAncestorsList {
    /**
     * Look up a category by ID or slug.
     */
    category: CategoryAncestorsList_category | null;
}
export interface CategoryAncestorsListVariables {
    id: string;
    first: number;
    after?: string | null;
}
