import { gql } from 'apollo-server';

export const postsTypeDefs = gql`
  extend type Query {
    Post(id: ID!): Post!
    Posts(filters: PostsFiltersInput): [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    userId: String!
    indexRef: Int!
    createdAt: String!
  }

  input PostsFiltersInput {
    _sort: String
    _order: PostsFiltersOrderEnum
    _start: Int
    _limit: Int
  }

  enum PostsFiltersOrderEnum {
    asc
    desc
  }
`;
