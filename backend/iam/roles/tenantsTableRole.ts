import { tenantsTable } from "../../tables";
import { createTableIamRole } from "../createTableIamRole";

export const tenantsTableRole = createTableIamRole("iam", tenantsTable);
