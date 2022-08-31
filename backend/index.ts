import * as aws from "@pulumi/aws";
// import { tenantsDs } from "./datasources";
// import { tenantsTable } from "./tables";
import { addTenantResolver, getTenantByIdResolver } from "./resolvers";
import { api, apiKey } from "./api";

// Only resolvers and apis are needed here because objects are created in the following order:
// 00- create appsync api and apikey
// 01- create graphql schema
// 02- create table dynamoDB
// 03- create role, policy and role policy attachment to the table
// 04- create appsync datasource
// 05- create resolvers attached to the datasource
export { addTenantResolver, getTenantByIdResolver };

export const endpoint = api.uris["GRAPHQL"];
export const key = apiKey.key;
