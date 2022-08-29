import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import awsConfig from "../awsConfig.json";

export const build = (): ApolloClient<NormalizedCacheObject> => {
  const link = ApolloLink.from([
    createAuthLink(awsConfig as unknown as any), // eslint-disable-line
    createSubscriptionHandshakeLink(awsConfig as unknown as any), // eslint-disable-line
  ]);
  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
};
