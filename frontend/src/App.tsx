import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql";
import { TestQueryComponent } from "./TestQueryComponent";

export const App = () => (
  <ApolloProvider client={client.build()}>
    <TestQueryComponent />
  </ApolloProvider>
);
