import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const confirmParcelDelivery = lazy(() => import("@/pages/receiver/confirmParcelDelivery"));
const viewDeliveryHistory = lazy(() => import("@/pages/receiver/viewDeliveryHistory"));
const ViewIncomingParcels = lazy(() => import("@/pages/receiver/viewIncomingParcel"));

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "View incoming parcels",
        url: "/receiver/incoming-parcels",
        component: ViewIncomingParcels,
      },
      {
        title: "Confirm parcel delivery",
        url: "/receiver/confirm-parcels",
        component: confirmParcelDelivery,
      },
      {
        title: "View delivery history",
        url: "/receiver/delivery-history",
        component: viewDeliveryHistory,
      },
      
    ],
  },
];