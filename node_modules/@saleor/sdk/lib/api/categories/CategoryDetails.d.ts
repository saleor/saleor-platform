import BaseDetails, { MapQueryData } from "../../helpers/BaseDetails";
import { CategoryDetails as CategoryDetailsQuery, CategoryDetailsVariables } from "../../queries/gqlTypes/CategoryDetails";
import { CategoryDetails as Category } from "../../fragments/gqlTypes/CategoryDetails";
export declare class CategoryDetails extends BaseDetails<CategoryDetailsQuery, Category, CategoryDetailsVariables> {
    mapQueryData: MapQueryData<CategoryDetailsQuery, Category>;
    query: (variables: CategoryDetailsVariables) => Promise<import("apollo-client").ApolloQueryResult<CategoryDetailsQuery>>;
}
