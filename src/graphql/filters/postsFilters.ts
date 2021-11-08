import { gql } from 'apollo-server';

export const postsFiltersTypeDefs = gql`
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
