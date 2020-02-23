import { ApolloServer, gql } from 'apollo-server';

import books from './bookData';

const typeDefs = gql`
  schema {
    query: Query
  }

  type Query {
    books: [Book]
  }

  type Book {
    title: String!
    numberOfPages: Int!
    author: Author
  }

  type Author {
    firstName: String!
    lastName: String!
  }
`;

const resolvers = {
  Query: {
    books: (): Array<Book> => books,
  },
  Book: {
    author: (book: Book): Author => book.author,
  },
};

/* main */
(async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  apolloServer
    .listen()
    .then(({ url }) => console.log(`Apollo server listening at ${url}`));
})();
