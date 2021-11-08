import { gql } from 'apollo-server';

export const postsTypeDefs = gql`
  extend type Query {
    Post(id: ID!): Post!
    Posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    userId: String!
    indexRef: Int!
    createdAt: String!
  }
`;
