import { useMutation, useQuery } from '@apollo/client';
import { CREATE_PORTFOLIO, DELETE_PORTFOLIO, GET_PORTFOLIOS, SIGN_UP, UPDATE_PORTFOLIO } from 'apollo/queries';

export const useCreatePortfolio = () => useMutation(CREATE_PORTFOLIO, {
  update(cache, { data: createPortfolio }) {
    const { portfolios }: any = cache.readQuery({ query: GET_PORTFOLIOS });
    cache.writeQuery({
      query: GET_PORTFOLIOS,
      data: { portfolios: [...portfolios, createPortfolio] },
    });
  }
});

export const useDeletePortfolio = () => useMutation(DELETE_PORTFOLIO, {
  update(cache, { data: { deletePortfolio: id } }) {
    const { portfolios }: any = cache.readQuery({ query: GET_PORTFOLIOS });
    cache.writeQuery({
      query: GET_PORTFOLIOS,
      data: { portfolios: [...portfolios.filter((p: any) => p._id !== id)] },
    });
  }
});

export const useUpdatePortfolio = () => useMutation(UPDATE_PORTFOLIO, {});
export const useGetPortfolios = () => useQuery(GET_PORTFOLIOS);

export const useCreateUser = () => useMutation(SIGN_UP);