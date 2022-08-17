import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql";

export const App = () => (
  <ApolloProvider client={client()}>
    <div>test</div>
  </ApolloProvider>
);
