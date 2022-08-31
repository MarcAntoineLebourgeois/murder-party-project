import { tenantsTable } from "../../tables";
import { createIamRole } from "../createIamRole";

export const tenantsTableRole = createIamRole("iam", tenantsTable);
