import { ApolloLink } from "apollo-link";
import { GraphQLError } from "graphql";
export declare enum JWTError {
    invalid = "InvalidTokenError",
    invalidSignature = "InvalidSignatureError",
    expired = "ExpiredSignatureError"
}
export declare function isJwtError(error: GraphQLError): boolean;
export declare function getAuthToken(): string | null;
export declare function setAuthToken(token: string): void;
export declare const invalidTokenLinkWithTokenHandler: (tokenExpirationCallback: () => void) => ApolloLink;
export declare const authLink: ApolloLink;
