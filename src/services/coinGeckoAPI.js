import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.coingecko.com/api/v3";
const createRequest = (url) => ({ url });
export const coinGeckoAPI = createApi({
  reducerPath: "coinGeckoAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosGlobalData: builder.query({
      query: () => createRequest(`/global`),
    }),
    getAllCryptos: builder.query({
      query: () =>
        createRequest(`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&sparkline=false
      `),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coins/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(
          `/coins/${coinId}/market_chart?vs_currency=usd&days=${timeperiod}`
        ),
    }),
  }),
});

export const {
  useGetCryptosGlobalDataQuery,
  useGetAllCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = coinGeckoAPI;
