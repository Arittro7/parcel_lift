/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/user/getme",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),

    // 🔹 New endpoint for receiver email validation
    getUserByEmail: builder.query({
      query: (email) => ({
        url: `/user/getUserByEmail/${email}`,
        method: "GET",
      }),
    }),

    // 🔹 get all users
    getUsers: builder.query<any[], void>({
      query: () => ({
        url: "/user/all-users?limit=100",
        method: "GET",
      }),
      providesTags: ["USER"],
      transformResponse: (response: any) => response.data,
    }),
    toggleUserStatus: builder.mutation({
      query: ({ id, isActive }) => ({
        url: `/user/toggle/${id}`,
        method: "PATCH",
        data: { isActive },
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useUserInfoQuery,
  useLogoutMutation,
  useGetUsersQuery,
  useToggleUserStatusMutation,
  useLazyGetUserByEmailQuery,
} = authApi;
