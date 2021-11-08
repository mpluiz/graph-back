import { gql } from 'apollo-server';

export const usersTypeDefs = gql`
  type Query {
    User: User!
    Users: [User!]!
  }

  type User {
    id: String
    firstName: String
    lastName: String
    userName: String
    indexRef: Int
    createdAt: String
  }
`;
