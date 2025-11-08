import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const confirmParcelDelivery = lazy(() => import("@/pages/receiver/parcelStatus"));
const viewDeliveryHistory = lazy(() => import("@/pages/receiver/deliveryHistory"));
const ViewIncomingParcels = lazy(() => import("@/pages/receiver/incomingParcel"));

export const receiverSidebarItems: ISidebarItem[] = [
  {
    items: [
      {
        title: "Incoming Parcels",
        url: "/receiver/incoming-parcels",
        component: ViewIncomingParcels,
      },
      {
        title: "Delivery Status",
        url: "/receiver/confirm-parcels",
        component: confirmParcelDelivery,
      },
      {
        title: "History",
        url: "/receiver/delivery-history",
        component: viewDeliveryHistory,
      },
      
    ],
  },
];