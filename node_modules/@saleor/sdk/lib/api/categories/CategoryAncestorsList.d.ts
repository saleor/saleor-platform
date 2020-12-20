import BaseList, { GetPageInfo, MapQueryData } from "../../helpers/BaseList";
import { CategoryAncestorsList as CategoryAncestorsListQuery, CategoryAncestorsListVariables } from "../../queries/gqlTypes/CategoryAncestorsList";
import { BaseCategory } from "../../fragments/gqlTypes/BaseCategory";
export declare class CategoryAncestorsList extends BaseList<CategoryAncestorsListQuery, BaseCategory, CategoryAncestorsListVariables> {
    getPageInfo: GetPageInfo<CategoryAncestorsListQuery>;
    mapQueryData: MapQueryData<CategoryAncestorsListQuery, BaseCategory>;
    query: (variables: CategoryAncestorsListVariables) => Promise<import("apollo-client").ApolloQueryResult<CategoryAncestorsListQuery>>;
}
