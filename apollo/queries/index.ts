import { gql } from '@apollo/client';

export const GET_PORTFOLIO = gql`
  query Portfolio($id: ID) {
    portfolio(id: $id) {
      _id,
      title,
      company,
      companyWebsite,
      location,
      jobTitle,
      description,
      startDate,
      endDate
    }
  }
`;

export const GET_PORTFOLIOS = gql`
  query Portfolios {
    portfolios {
      _id,
      title,
      company,
      companyWebsite,
      location,
      jobTitle,
      description,
      startDate,
      endDate
    }
  }
`;

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio {
    createPortfolio(input: {
      title: "Title 1",
      company: "Company 1",
      companyWebsite: "Website 1",
      location: "Location 1",
      jobTitle: "JobTitle 1",
      description: "Desc 1",
      startDate: "2012-12-12T23:59Z",
      endDate: "2013-11-14T23:49Z"
    }) {
      _id, 
      title, 
      company, 
      companyWebsite, 
      location, 
      jobTitle, 
      description,
      startDate,
      endDate
    }
  }
`;

export const UPDATE_PORTFOLIO = gql`
  mutation UpdatePortfolio($id: ID) {
    updatePortfolio(id: $id, input: {
      title: "UPDATE Title 1",
      company: "Company 1",
      companyWebsite: "Website 1",
      location: "Location 1",
      jobTitle: "JobTitle 1",
      description: "Desc 1",
      startDate: "2012-12-12T23:59Z",
      endDate: "2013-11-14T23:49Z"
    }) {
      _id,
      title,
      company,
      companyWebsite,
      location,
      jobTitle,
      description,
      startDate,
      endDate
    }
  }
`;

export const DELETE_PORTFOLIO = gql`
  mutation UpdatePortfolio($id: ID) {
    deletePortfolio(id: $id)
  }
`;

//AUTH QUERIES START ----------------------------------------------

export const SIGN_UP = gql`
  mutation SignUp(
    $email: String!
    $username: String!
    $avatar: String
    $password: String!
    $passwordConfirmation: String!
  ) {
    signUp(input: {
      email: $email
      username: $username
      avatar: $avatar
      password: $password
      passwordConfirmation: $passwordConfirmation
    })
  }
`
//AUTH QUERIES END ----------------------------------------------