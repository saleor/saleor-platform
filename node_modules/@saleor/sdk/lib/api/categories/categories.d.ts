import ApolloClient from "apollo-client";
import { CategoryAncestorsListVariables } from "../../queries/gqlTypes/CategoryAncestorsList";
import { CategoryChildrenListVariables } from "../../queries/gqlTypes/CategoryChildrenList";
import { CategoryDetails as CategoryDetailsQuery, CategoryDetailsVariables } from "../../queries/gqlTypes/CategoryDetails";
import { CategoryDetails as CategoryDetailsFragment } from "../../fragments/gqlTypes/CategoryDetails";
import { CategoryList as CategoryListQuery, CategoryListVariables } from "../../queries/gqlTypes/CategoryList";
import { BaseCategory } from "../../fragments/gqlTypes/BaseCategory";
import { WithDetails, WithList } from "../types";
import { CategoryList } from "./CategoryList";
import { CategoryAncestorsList } from "./CategoryAncestorsList";
import { CategoryChildrenList } from "./CategoryChildrenList";
import { CategoryDetails } from "./CategoryDetails";
export declare class CategoriesAPI implements WithDetails<CategoryDetailsQuery, CategoryDetailsFragment, CategoryDetailsVariables>, WithList<CategoryListQuery, BaseCategory, CategoryListVariables> {
    private client;
    constructor(client: ApolloClient<any>);
    /**
     * Method returning category details
     * @param variables Details parameters
     */
    getDetails: (variables: CategoryDetailsVariables) => Promise<CategoryDetails>;
    /**
     * Method returning list of categories with ability to request next page
     * @param params List parameters
     */
    getList: (variables: CategoryListVariables) => Promise<CategoryList>;
    getAncestors: (variables: CategoryAncestorsListVariables) => Promise<CategoryAncestorsList>;
    getChildren: (variables: CategoryChildrenListVariables) => Promise<CategoryChildrenList>;
}
