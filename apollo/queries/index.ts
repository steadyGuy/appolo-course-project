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
      startDate: "17/06/2021",
      endDate: "17/06/2021"
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