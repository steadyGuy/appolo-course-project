import { ApolloServer, gql } from 'apollo-server-express';
import PortfolioModel from '../models/PortfolioModel';
import UserModel from '../models/UserModel';
import { portfolioQueries, portfolioMutations, userMutations } from './resolvers';
import { portfolioTypes, userTypes } from './types';
import Portfolio from './models/Portfolio';
import User from './models/User';
import { buildAuthContext } from './context';

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

    signIn(input: SignInInput): User
    signUp(input: SignUpInput): String
    signOut: Boolean
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
    typeDefs, resolvers, context: ({ req }) => ({
      models: {
        Portfolio: new Portfolio(PortfolioModel),
        User: new User(UserModel),
      },
      ...buildAuthContext(req),
    }),
  })

  return apolloServer;

}

export default createApolloServer;