const data = {
  portfolios: [
    {
      _id: "sad87da79",
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016'
    },
    {
      _id: "da789ad1",
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Slovakia, Kosice',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '01/01/2011',
      endDate: '01/01/2013'
    },
    {
      _id: "sadcxv9",
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011'
    }
  ]
}

export const portfolioQueries = {
  portfolio: (parent: any, { id }: any) => {
    const portfolio = data.portfolios.find(p => p._id === id);
    return portfolio;
  },
  portfolios: () => {
    return data.portfolios;
  },
};

export const portfolioMutations = {
  createPortfolio: (parent: any, { input }: any) => {
    const _id = require('crypto').randomBytes(10).toString('hex');
    const newPortfolio = { ...input, _id }
    data.portfolios.push(newPortfolio);
    return newPortfolio;
  },
  updatePortfolio: (parent: any, { id, input }: any) => {
    const index = data.portfolios.findIndex(p => p._id === id);
    data.portfolios[index] = { ...data.portfolios[index], ...input };
    return data.portfolios[index];
  },
  deletePortfolio: (parent: any, { id }: any) => {
    data.portfolios = data.portfolios.filter(p => p._id !== id);
    return id;
  }
}