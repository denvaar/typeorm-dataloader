import { makeExecutableSchema } from 'graphql-tools';
import { graphql } from 'graphql';

const typeDefs = `
schema {
  query: Query
}
type Query {
  hello: String!
  name: String!
}
`;

const resolvers = {
  Query: {
    hello: () => 'world',
    name: () => 'denvaar',
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

/* main */
(async () => {
  const query: string | null = process.argv[2];

  const result = await graphql(schema, query);

  console.log(JSON.stringify(result, null, 2));
})();
