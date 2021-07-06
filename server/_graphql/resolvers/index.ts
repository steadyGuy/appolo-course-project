export const portfolioQueries = {
  portfolio: async (parent: any, { id }: any, ctx: any) => {
    return await ctx.models.Portfolio.getById(id);
  },
  portfolios: async (_: any, __: any, ctx: any) => {
    return await ctx.models.Portfolio.getAll();
  },
};

export const portfolioMutations = {
  createPortfolio: async (_: any, { input }: any, ctx: any) => {
    return await ctx.models.Portfolio.create(input);
  },
  updatePortfolio: async (_: any, { id, input }: any, ctx: any) => {
    return await ctx.models.Portfolio.findAndUpdate(id, input);
  },
  deletePortfolio: async (parent: any, { id }: any, ctx: any) => {
    return await ctx.models.Portfolio.asyncfindAndDelete(id);
  }
}

export const userMutations = {
  signIn: async (_: any, { input }: any, { authenticate, models: { User } }: any) => {
    return User.signIn(input, authenticate);
  },
  signUp: async (_: any, { input }: any, { models: { User } }: any) => {
    const user = await User.signUp(input);
    return user._id;
  },
  signOut: async (_: any, __: any, { models: { User }, logout, isAuthenticated }: any) => {
    return User.signOut({ logout, isAuthenticated });
  },
}
