export interface CollectionDetails_backgroundImage {
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
export interface CollectionDetails {
    __typename: "Collection";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
    backgroundImage: CollectionDetails_backgroundImage | null;
    description: string;
    descriptionJson: any;
}
