import * as aws from "@pulumi/aws";

export const createTableIamRole = (name: string, table: aws.dynamodb.Table) => {
  const role = new aws.iam.Role(`${name}-role`, {
    assumeRolePolicy: aws.iam.getPolicyDocumentOutput({
      statements: [
        {
          actions: ["sts:AssumeRole"],
          principals: [
            {
              identifiers: ["appsync.amazonaws.com"],
              type: "Service",
            },
          ],
          effect: "Allow",
        },
      ],
    }).json,
  });

  const policy = new aws.iam.Policy(`${name}-policy`, {
    policy: aws.iam.getPolicyDocumentOutput({
      statements: [
        {
          actions: ["dynamodb:PutItem", "dynamodb:GetItem"],
          resources: [table.arn],
          effect: "Allow",
        },
      ],
    }).json,
  });

  const attachment = new aws.iam.RolePolicyAttachment(`${name}-rpa`, {
    role: role,
    policyArn: policy.arn,
  });

  return role;
};
