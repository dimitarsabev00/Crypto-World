import { configureStore } from "@reduxjs/toolkit";

import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { coinGeckoAPI } from "../services/coinGeckoAPI";

export default configureStore({
  reducer: {
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [coinGeckoAPI.reducerPath]: coinGeckoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoNewsApi.middleware,
      coinGeckoAPI.middleware
    ),
});
