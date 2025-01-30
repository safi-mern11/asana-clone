import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shoesApi = createApi({
  reducerPath: "shoesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["shoes"],
  endpoints: (builder) => ({
    fetchAllShoes: builder.query({
      query: () => ({
        url: "/shoes",
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchAllShoesQuery } = shoesApi;