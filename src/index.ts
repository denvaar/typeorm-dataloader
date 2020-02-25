import { ApolloServer } from 'apollo-server';
import { createConnection } from 'typeorm';

import resolvers from './graphqlSchema/resolvers';
import typeDefs from './graphqlSchema/typeDefs';

/* main */
(async () => {
  await createConnection();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  apolloServer
    .listen()
    .then(({ url }) => console.log(`Apollo server listening at ${url}`));
})();
