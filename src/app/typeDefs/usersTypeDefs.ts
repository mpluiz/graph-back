import { gql } from 'apollo-server';

export const usersTypeDefs = gql`
  extend type Query {
    User(id: ID!): User!
    Users(filters: UsersFiltersInputs): [User!]!
  }
  
  extend type Mutation {
    CreateUser(data: CreateUserInputs!): User!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
  }
  
  input CreateUserInputs {
    firstName: String!
    lastName: String!
    userName: String!
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
