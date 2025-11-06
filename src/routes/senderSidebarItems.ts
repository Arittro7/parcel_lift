import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const CancelParcel = lazy(() => import("@/pages/sender/cancelParcel"));
const createParcelDeliveryRequests = lazy(
  () => import("@/pages/sender/CreateParcelDeliveryRequests")
);
const viewAllCreatedParcels = lazy(
  () => import("@/pages/sender/viewAllCreatedParcels")
);

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Parcel Lift",
    items: [
      {
        title: "Create parcel delivery request",
        url: "/sender/parcel-request",
        component: createParcelDeliveryRequests,
      },
      {
        title: "Cancel parcel",
        url: "/sender/cancel-parcel",
        component: CancelParcel,
      },
      {
        title: "View all created parcels",
        url: "/sender/all-created-parcels",
        component: viewAllCreatedParcels,
      },
    ],
  },
];
