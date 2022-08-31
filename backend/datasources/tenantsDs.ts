import * as aws from "@pulumi/aws";
import { api } from "../api";
import { tenantsTable } from "../tables";
import { tenantsTableRole } from "../iam";

export const tenantsDs = new aws.appsync.DataSource("tenants-ds", {
  name: "tenantsDs",
  apiId: api.id,
  type: "AMAZON_DYNAMODB",
  dynamodbConfig: {
    tableName: tenantsTable.name,
  },
  serviceRoleArn: tenantsTableRole.arn,
});
