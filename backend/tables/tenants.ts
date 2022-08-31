import * as aws from "@pulumi/aws";

export const tenantsTable = new aws.dynamodb.Table("tenants", {
  hashKey: "id",
  attributes: [{ name: "id", type: "S" }],
  readCapacity: 1,
  writeCapacity: 1,
});
