import { gql } from 'apollo-server';

export const usersFiltersTypeDefs = gql`
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
