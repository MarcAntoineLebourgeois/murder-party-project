import * as aws from "@pulumi/aws";
import { schema } from "../graphql/schema/schema";

// Create API accessible with a key
export const api = new aws.appsync.GraphQLApi("api", {
  authenticationType: "API_KEY",
  schema,
});

export const apiKey = new aws.appsync.ApiKey("key", {
  apiId: api.id,
});
