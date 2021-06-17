import './config/dotenvConf';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import morgan from 'morgan';

// import { graphqlHTTP } from 'express-graphql';
// import { buildSchema } from 'graphql';

import { ApolloServer, gql } from 'apollo-server-express';

import router from './router';
import { portfolioTypes } from './_graphql/types';
import { portfolioQueries, portfolioMutations } from './_graphql/resolvers';
// import connection from './config/db';

// Midlware connecting
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(morgan('dev'));
app.use(cookieParser());

// routes middleware
app.use('/api', router);

// turn on the server
const PORT = process.env.PORT || 3001;

// connection.once('open', () => {
//   console.log('Mongodb connection established successfully');
// });

// Construct a schema using graphql schema language
const typeDefs = gql`
  ${portfolioTypes}
  type Query {
    portfolio(id: ID): Portfolio
    portfolios: [Portfolio]
  }

  type Mutation {
    createPortfolio(input: PortfolioInput): Portfolio
    updatePortfolio(id: ID, input: PortfolioInput): Portfolio
    deletePortfolio(id: ID): ID
  }
`;

// The root provides a resolver for each API endpoints
const resolvers = {
  Query: {
    ...portfolioQueries,
  },
  Mutation: {
    ...portfolioMutations,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers })
apolloServer.applyMiddleware({ app });
// app.use('/graphql', graphqlHTTP({
//   schema,
//   rootValue: root,
//   graphiql: true,
// }));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
