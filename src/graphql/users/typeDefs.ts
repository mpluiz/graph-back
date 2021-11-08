import { gql } from 'apollo-server';

export const usersTypeDefs = gql`
  type Query {
    User(id: ID!): User!
    Users: [User!]!
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    userName: String
    indexRef: Int
    createdAt: String
  }
`;
