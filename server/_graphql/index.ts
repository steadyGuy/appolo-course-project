import { ApolloServer, gql } from 'apollo-server-express';
import PortfolioModel from '../models/PortfolioModel';
import { portfolioQueries, portfolioMutations } from './resolvers';
import { portfolioTypes } from './types';
import Portfolio from './models/Portfolio';

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

const createApolloServer = () => {
  const apolloServer = new ApolloServer({
    typeDefs, resolvers, context: () => ({
      models: {
        Portfolio: new Portfolio(PortfolioModel),
      }
    }),
  })

  return apolloServer;

}

export default createApolloServer;