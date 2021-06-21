import React from 'react'
import PortfolioCard from 'components/Portfolios/PortfolioCard';
import Link from 'next/link';
import withApollo from 'hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import { useCreatePortfolio, useDeletePortfolio, useGetPortfolios, useUpdatePortfolio } from 'apollo/actions';

const Portfolios = () => {
  const { data } = useGetPortfolios();
  const [createPortfolio] = useCreatePortfolio();
  const [deletePortfolio] = useDeletePortfolio();
  const [updatePortfolio] = useUpdatePortfolio();

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
              <button className="btn btn-warning" onClick={() => updatePortfolio({ variables: { id: item._id } })}>Update Portfolio</button>
              <button className="btn btn-danger" onClick={() => deletePortfolio({ variables: { id: item._id } })}>Delete Portfolio</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default withApollo(Portfolios as any, { getDataFromTree });
