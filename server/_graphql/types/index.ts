const portfolioFields = `
  title: String
  company: String
  companyWebsite: String
  jobTitle: String
  location: String
  description: String
  daysOfExperience: Int
  isCurrentlyEmployed: Boolean
  startDate: String
  endDate: String
`;

export const portfolioTypes = `
  type Portfolio {
    _id: ID
    ${portfolioFields}
  }

  input PortfolioInput {
    ${portfolioFields}
  }
`;

export const userTypes = `
  type User {
    _id: ID
    avatar: String
    userName: String
    displayname: String
    email: String
    role: String
  }

  input SignUpInput {
    avatar: String
    userName: String!
    displayname: String
    email: String!
    password: String!
    passwordConfirmation: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }
`;
