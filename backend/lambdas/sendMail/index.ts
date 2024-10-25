import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import { lambdaRoleSendMail } from "../../iam";
import { sendMail } from "./handler";

const baseName = "sendMailLambda";

export const sendMailLambda = (): aws.lambda.CallbackFunction<any, any> => {
  const name = `${pulumi.getProject()}-${pulumi.getStack()}-${baseName}`;
  const callback = sendMail;
  const runtime = "nodejs14.x";

  return new aws.lambda.CallbackFunction(baseName, {
    name,
    callback,
    runtime,
  });
};
