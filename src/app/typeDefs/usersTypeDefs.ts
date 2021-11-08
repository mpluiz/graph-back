import { gql } from 'apollo-server';

export const usersTypeDefs = gql`
  extend type Query {
    User(id: ID!): User!
    Users(filters: UsersFiltersInput): [User!]!
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    userName: String
    indexRef: Int
    createdAt: String
  }

  input UsersFiltersInput {
    _sort: String
    _order: UsersFiltersOrderEnum
    _start: Int
    _limit: Int
  }

  enum UsersFiltersOrderEnum {
    asc
    desc
  }
`;
