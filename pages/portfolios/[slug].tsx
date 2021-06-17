import React from 'react'
import axios from 'axios';

const fetchPortfolioById = async (id: string) => {
  console.log(id, 'idididid')
  const query = `query Portfolio($id: ID) {
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
    }`;
  const variables = { id };
  const { data: graph }: any = await axios.post('http://localhost:3001/graphql', { query, variables });
  return graph?.data.portfolio;
}

const PortfolioDetail = ({ portfolio }: any) => {
  return (
    <div className="portfolio-detail">
      <div className="container">

        <div className="jumbotron">
          <h1 className="display-3">{portfolio?.title}</h1>
          <p className="lead">{portfolio?.jobTitle}</p>
          <p>
            <a className="btn btn-lg btn-success" href={portfolio?.companyWebsite} role="button">
              See Company</a>
          </p>
        </div>

        <div className="row marketing">
          <div className="col-lg-6">
            <h4 className="title">Location</h4>
            <p className="text">{portfolio?.location}</p>

            <h4 className="title">Start Date</h4>
            <p className="text">{portfolio?.startDate}</p>
          </div>

          <div className="col-lg-6">
            {/* TODO: days later... */}
            <h4 className="title">Days</h4>
            <p className="text">44</p>

            <h4 className="title">End Date</h4>
            <p className="text">{portfolio?.endDate}</p>
          </div>
          <div className="col-md-12">
            <hr />
            <h4 className="title">Description</h4>
            <p>{portfolio?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx: any) {
  const { slug } = ctx.params;
  const portfolio = await fetchPortfolioById(slug.toString());
  return {
    props: { portfolio },
  }
}

export default PortfolioDetail;