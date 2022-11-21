import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.coingecko.com/api/v3";
const createRequest = (url) => ({ url });
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosGlobalData: builder.query({
      query: () => createRequest(`/global`),
    }),
  }),
});

export const { useGetCryptosGlobalDataQuery } = coinGeckoAPI;
