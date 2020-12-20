export interface CategoryDetails_category_backgroundImage {
    __typename: "Image";
    /**
     * Alt text for an image.
     */
    alt: string | null;
    /**
     * The URL of the image.
     */
    url: string;
}
export interface CategoryDetails_category {
    __typename: "Category";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
    backgroundImage: CategoryDetails_category_backgroundImage | null;
    description: string;
    descriptionJson: any;
}
export interface CategoryDetails {
    /**
     * Look up a category by ID or slug.
     */
    category: CategoryDetails_category | null;
}
export interface CategoryDetailsVariables {
    id?: string | null;
    slug?: string | null;
}
