import React from 'react'
import { useRouter } from 'next/router';
const PortfolioDetail = ({ query }) => {
  return (
    <div>
      Detail page {query.slug}
    </div>
  )
}

export async function getServerSideProps({ query }: any) {
  return {
    props: { query }, // will be passed to the page component as props
  }
}

export default PortfolioDetail;