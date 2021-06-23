import { ApolloServer, gql } from 'apollo-server-express';
import PortfolioModel from '../models/PortfolioModel';
import UserModel from '../models/UserModel';
import { portfolioQueries, portfolioMutations, userMutations } from './resolvers';
import { portfolioTypes, userTypes } from './types';
import Portfolio from './models/Portfolio';
import User from './models/User';

// Construct a schema using graphql schema language
const typeDefs = gql`
  ${portfolioTypes}
  ${userTypes}
  type Query {
    portfolio(id: ID): Portfolio
    portfolios: [Portfolio]
  }

  type Mutation {
    createPortfolio(input: PortfolioInput): Portfolio
    updatePortfolio(id: ID, input: PortfolioInput): Portfolio
    deletePortfolio(id: ID): ID

    signIn: String
    signUp(input: SignUpInput): String
    signOut: String
  }
`;

// The root provides a resolver for each API endpoints
const resolvers = {
  Query: {
    ...portfolioQueries,
  },
  Mutation: {
    ...portfolioMutations,
    ...userMutations,
  },
};

const createApolloServer = () => {
  const apolloServer = new ApolloServer({
    typeDefs, resolvers, context: () => ({
      models: {
        Portfolio: new Portfolio(PortfolioModel),
        User: new User(UserModel),
      }
    }),
  })

  return apolloServer;

}

export default createApolloServer;