import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

export const build = (): ApolloClient<NormalizedCacheObject> => {
  const awsConfig = {
    auth: {
      apiKey: "da2-6hyeigh75ndthmoqreok3blrqu",
      type: "API_KEY",
    },
    url: "https://prydd5bqyvbvhpfhsy6vluvlre.appsync-api.eu-west-3.amazonaws.com/graphql",
    region: "eu-west-3",
  };

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
