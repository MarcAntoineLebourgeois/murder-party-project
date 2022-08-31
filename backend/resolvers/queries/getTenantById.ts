import * as aws from "@pulumi/aws";
import { api } from "../../api";
import { tenantsDs } from "../../datasources";

export const getTenantByIdResolver = new aws.appsync.Resolver(
  "getTenantById-resolver",
  {
    apiId: api.id,
    dataSource: tenantsDs.name,
    type: "Query",
    field: "getTenantById",
    requestTemplate: `{
          "version": "2017-02-28",
          "operation": "GetItem",
          "key": {
              "id": $util.dynamodb.toDynamoDBJson($ctx.args.id),
          }
      }`,
    responseTemplate: `$util.toJson($ctx.result)`,
  }
);
