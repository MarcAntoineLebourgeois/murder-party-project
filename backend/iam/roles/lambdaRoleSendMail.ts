import { createLambdaRoleSendMail } from "../createLambdaRoleSendMail";
import { sendMailLambda } from "../../lambdas";

export const lambdaRoleSendMail = createLambdaRoleSendMail(
  "iam",
  sendMailLambda()
);
