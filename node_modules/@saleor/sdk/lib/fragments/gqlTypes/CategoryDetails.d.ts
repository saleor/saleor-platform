export interface CategoryDetails_backgroundImage {
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
export interface CategoryDetails {
    __typename: "Category";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
    backgroundImage: CategoryDetails_backgroundImage | null;
    description: string;
    descriptionJson: any;
}
