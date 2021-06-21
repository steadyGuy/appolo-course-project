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
