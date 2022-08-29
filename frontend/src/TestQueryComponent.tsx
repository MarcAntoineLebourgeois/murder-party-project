import { FC } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_TENANT = gql`
  query GetTenant {
    getTenantById(id: "123") {
      id
      name
    }
  }
`;

export const TestQueryComponent: FC = () => {
  const { data, loading, error } = useQuery(GET_TENANT);

  if (loading) return <>{loading}</>;
  if (error) return <>{JSON.stringify(error)}</>;
  return <>{JSON.stringify(data.getTenantById, null, 4)}</>;
};
