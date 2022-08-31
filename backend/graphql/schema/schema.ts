export const schema = `
type Query {
    getTenantById(id: ID!): Tenant
}

type Mutation {
    addTenant(id: ID!, name: String!): Tenant!
}

type Tenant {
    id: ID!
    name: String
}

schema {
    query: Query
    mutation: Mutation
}`;
