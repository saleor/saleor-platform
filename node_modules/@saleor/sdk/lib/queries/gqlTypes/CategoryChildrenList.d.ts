export interface CategoryChildrenList_category_children_edges_node {
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
export interface CategoryChildrenList_category_children_edges {
    __typename: "CategoryCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: CategoryChildrenList_category_children_edges_node;
}
export interface CategoryChildrenList_category_children_pageInfo {
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
export interface CategoryChildrenList_category_children {
    __typename: "CategoryCountableConnection";
    edges: CategoryChildrenList_category_children_edges[];
    /**
     * Pagination data for this connection.
     */
    pageInfo: CategoryChildrenList_category_children_pageInfo;
}
export interface CategoryChildrenList_category {
    __typename: "Category";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * List of children of the category.
     */
    children: CategoryChildrenList_category_children | null;
}
export interface CategoryChildrenList {
    /**
     * Look up a category by ID or slug.
     */
    category: CategoryChildrenList_category | null;
}
export interface CategoryChildrenListVariables {
    id: string;
    first: number;
    after?: string | null;
}
