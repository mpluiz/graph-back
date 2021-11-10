import { gql } from 'apollo-server';

export const usersTypeDefs = gql`
  extend type Query {
    User(id: ID!): User!
    Users(filters: UsersFiltersInputs): [User!]!
  }

  extend type Mutation {
    CreateUser(data: CreateUserInputs!): User!
    UpdateUser(id: ID! data: UpdateUserInputs): User!
    DeleteUser(id: ID!): Boolean!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    posts: [Post!]
    indexRef: Int!
    createdAt: String!
  }

  input CreateUserInputs {
    firstName: String!
    lastName: String!
    userName: String!
  }

  input UpdateUserInputs {
    firstName: String
    lastName: String
    userName: String
    indexRef: Int
  }

  input UsersFiltersInputs {
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
