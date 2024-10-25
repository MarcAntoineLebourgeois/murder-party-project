import * as aws from "@pulumi/aws";

export const createLambdaRoleSendMail = (
  name: string,
  lambda: aws.lambda.Function
) => {
  const role = new aws.iam.Role(`${name}-role`, {
    assumeRolePolicy: aws.iam.getPolicyDocumentOutput({
      statements: [
        {
          actions: ["sts:AssumeRole"],
          principals: [
            {
              identifiers: ["lambda.amazonaws.com"],
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
          actions: ["*"],
          resources: [lambda.arn],
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
