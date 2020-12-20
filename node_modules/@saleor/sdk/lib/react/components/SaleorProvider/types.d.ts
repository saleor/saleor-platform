/// <reference types="react" />
import { ConfigInput, ApolloConfigInput } from "../../../types";
export interface IProps {
    children: React.ReactElement;
    /**
     * SDK configuration.
     */
    config: ConfigInput;
    /**
     * Custom Apollo client configuration.
     */
    apolloConfig?: ApolloConfigInput;
}
