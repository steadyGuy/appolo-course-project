import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PortfolioCard from 'components/Portfolios/PortfolioCard';
import Link from 'next/link';
import { GET_PORTFOLIOS, CREATE_PORTFOLIO } from 'apollo/queries';
import { useQuery, useMutation } from '@apollo/client';
import { GetServerSidePropsContext } from 'next';
import withApollo from 'hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';

const fetchCreatePortfolio = async () => {
  const query = ``;
  const { data: graph }: any = await axios.post('http://localhost:3001/graphql', { query });
  return graph?.data.createPortfolio;
}

const fetchUpdatePortfolio = async (id: number) => {
  const query = `mutation UpdatePortfolio($id: ID) {
      updatePortfolio(id: $id, input: {
        title: "UPDATE Title 1",
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
    }`;
  const variables = { id };
  const { data: graph }: any = await axios.post('http://localhost:3001/graphql', { query, variables });
  return graph?.data.updatePortfolio;
}

const deletePortfolio = (id: number) => {
  alert('РЕШИЛ НЕ ДОБАВЛЯТЬ, ТАК КАК БУДЕТ ПЕРЕДЕЛАНО');
}

const Portfolios = () => {
  // const onPortfolioCreated = ({ createPortfolio }: any) => {
  //   setPortfolios((prev: any) => [...prev, createPortfolio]);
  // };

  const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {
    update(cache, { data: createPortfolio }) {
      console.log('cache', cache);
      const { portfolios }: any = cache.readQuery({ query: GET_PORTFOLIOS });
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: [...portfolios, createPortfolio] },
      });
    }
  })

  const { data } = useQuery(GET_PORTFOLIOS);
  // const [createPortfolio] = useMutation(CREATE_PORTFOLIO, { onCompleted: onPortfolioCreated });

  const updatePortfolio = async (id: number) => {
    const portfolio = await fetchUpdatePortfolio(id);
  }

  const portfolios = data && data.portfolios || [];

  return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
        <button onClick={() => createPortfolio()} className="btn btn-primary mb-3">Create Portfolio</button>
      </section>
      <section className="pb-5">
        <div className="row">
          {portfolios.map((item: any) => (
            <div key={item._id} className="col-md-4 mt-3">
              <Link
                href='/portfolios/[slug]'
                as={`/portfolios/${item._id}`}
              >
                <a className="card-link">
                  <PortfolioCard portfolio={item} />
                </a>
              </Link>
              <button className="btn btn-warning" onClick={() => updatePortfolio(item._id)}>Update Portfolio</button>
              <button className="btn btn-danger" onClick={() => deletePortfolio(item._id)}>Delete Portfolio</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

// }

export default withApollo(Portfolios as any, { getDataFromTree });
