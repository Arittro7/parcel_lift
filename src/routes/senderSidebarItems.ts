import type { ISidebarItem } from "@/types";
import { lazy } from "react";
// import logo from "@/assets/icon/Logo2.png";

const CancelParcel = lazy(() => import("@/pages/sender/cancelParcel"));
const createParcelDeliveryRequests = lazy(
  () => import("@/pages/sender/CourierRequests")
);
const ParcelLogs = lazy(() => import("@/pages/sender/ParcelLogs"));

export const senderSidebarItems: ISidebarItem[] = [
  {
    // image: logo,
    items: [
      {
        title: "Courier Request",
        url: "/sender/parcel-request",
        component: createParcelDeliveryRequests,
      },
      {
        title: "Cancel parcel",
        url: "/sender/cancel-parcel",
        component: CancelParcel,
      },
      {
        title: "Logs",
        url: "/sender/all-created-parcels",
        component: ParcelLogs,
      },
    ],
  },
];
