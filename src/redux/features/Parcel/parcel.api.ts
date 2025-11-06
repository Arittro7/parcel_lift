/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";
import type { IParcel, IParcelResponse } from "@/types";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // sender query
    getParcels: builder.query<any[], void>({
      query: () => ({ url: "/parcels/my", method: "GET" }),
      providesTags: ["PARCEL"],
      transformResponse: (response: any) => response.data,
    }),
    addParcel: builder.mutation({
      query: (data) => ({
        url: "/parcels",
        method: "POST",
        data,
      }),
      invalidatesTags: ["PARCEL"],
    }),
    cancelParcel: builder.mutation({
      query: (id: string) => ({
        url: `/parcels/cancel/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"], // automatically refresh getParcels
    }),
    // receiver query
    getIncomingParcels: builder.query<any[], void>({
      query: () => ({ url: "/parcels/incoming", method: "GET" }),
      providesTags: ["PARCEL"],
      transformResponse: (response: any) => response.data,
    }),
    // ✅ confirm delivery mutation
    confirmDelivery: builder.mutation({
      query: (id: string) => ({
        url: `/parcels/confirmDelivery/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"], // refresh after confirm
    }),
    getDeliveredParcels: builder.query<any[], void>({
      query: () => ({ url: "/parcels/delivered", method: "GET" }),
      providesTags: ["PARCEL"],
      transformResponse: (response: any) => response.data,
    }),

    // admin query
    getAllParcels: builder.query<any[], void>({
      query: () => ({ url: "/parcels/all-parcels", method: "GET" }),
      providesTags: ["PARCEL"],
      transformResponse: (response: any) => response.data,
    }),

    Parcels: builder.query<
      IParcelResponse,
      { page?: number; limit?: number; status?: string }
    >({
      query: ({ page = 1, limit = 10, status }) => ({
        url: "/parcels/all-parcels",
        method: "GET",
        params: { page, limit, status },
      }),
      providesTags: ["PARCEL"],
    }),

    blockParcel: builder.mutation({
      query: (id: string) => ({
        url: `/parcels/block/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"], // refresh after confirm
    }),
    unblockParcel: builder.mutation({
      query: (id: string) => ({
        url: `/parcels/unblock/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"], // refresh after confirm
    }),
    getParcelByTrackingId: builder.query<IParcel[], string>({
      query: (trackingId) => ({
        url: `/parcels/tracking/${trackingId}`,
        method: "GET",
      }),
      providesTags: ["PARCEL"],
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const {
  useGetParcelsQuery,
  useAddParcelMutation,
  useCancelParcelMutation,
  useGetIncomingParcelsQuery,
  useConfirmDeliveryMutation,
  useGetDeliveredParcelsQuery,
  useGetAllParcelsQuery,
  useParcelsQuery,
  useBlockParcelMutation,
  useUnblockParcelMutation,
  useGetParcelByTrackingIdQuery,
} = parcelApi;
