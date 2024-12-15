import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState, endpoint }) => {
    const user = getState().auth;
    console.log(user);

    if (user.token) {
      headers.set("Authorization", `Bearer ${user.token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  credentials: "include", // This allows server to set cookies
  tagTypes: ["Product", "Order", "News", "User"],
  endpoints: (builder) => ({
  }),
});
