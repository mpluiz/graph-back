import { gql } from 'apollo-server';

export const postsTypeDefs = gql`
  extend type Query {
    Post: Post!
    Posts: [Post!]!
  }

  type Post {
    id: String!
    title: String!
    body: String!
    userId: String!
    indexRef: Int!
    createdAt: String!
  }
`;
