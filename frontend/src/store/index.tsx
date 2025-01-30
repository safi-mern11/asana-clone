import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { shoesApi } from "./features/shoesApi";

const rootReducer = combineReducers({
  [shoesApi.reducerPath]: shoesApi.reducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shoesApi.middleware),
});
