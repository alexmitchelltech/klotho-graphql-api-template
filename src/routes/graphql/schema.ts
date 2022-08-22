import { buildSchema } from 'graphql';

const schemaText = `
enum Permission {
  READ
  CHANGE
  GRANT
}

type User {
  id: ID!
}

type Resource {
  id: ID!
  owner: User!
}

type Grant {
  resource: Resource!
  grantee: User!
  permissions: [Permission!]!
  granter: User!
}

input GrantCheckInput {
  userID: ID!
  resourceID: ID!
}

type Query {
  checkGrant(input: GrantCheckInput!): Grant
}

input GrantInput {
  userID: ID!
  resourceID: ID!
  permissions: [Permission!]!
}

type Mutation {
  giveGrant(input: GrantInput!): Grant
  takeGrant(input: GrantInput!): Grant
}

`;

const schema = buildSchema(schemaText);

export default schema;
