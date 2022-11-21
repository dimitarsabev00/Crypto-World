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
      query: () => createRequest(`/coins/list`),
    }),
  }),
});

export const { useGetCryptosGlobalDataQuery, useGetAllCryptosQuery } =
  coinGeckoAPI;
