import { gql } from 'apollo-server';

export default gql`
  schema {
    query: Query
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Book {
    title: String!
    numberOfPages: Int!
    author: Author!
  }

  type Author {
    firstName: String!
    lastName: String!
    books: [Book]
  }
`;
