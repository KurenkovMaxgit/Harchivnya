import { AUTH_URL, USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    getUserDetails: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
      }),
    }),
  }),
});

export const { useLoginMutation, useGetUserDetailsQuery, useRegisterMutation } =
  usersApiSlice;
