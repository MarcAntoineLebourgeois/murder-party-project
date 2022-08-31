import * as aws from "@pulumi/aws";
import { api } from "../../api";
import { tenantsDs } from "../../datasources";

export const addTenantResolver = new aws.appsync.Resolver(
  "addTenant-resolver",
  {
    apiId: api.id,
    dataSource: tenantsDs.name,
    type: "Mutation",
    field: "addTenant",
    requestTemplate: `{
          "version" : "2017-02-28",
          "operation" : "PutItem",
          "key" : {
              "id" : $util.dynamodb.toDynamoDBJson($ctx.args.id)
          },
          "attributeValues" : {
              "name": $util.dynamodb.toDynamoDBJson($ctx.args.name)
          }
      }`,
    responseTemplate: `$util.toJson($ctx.result)`,
  }
);
