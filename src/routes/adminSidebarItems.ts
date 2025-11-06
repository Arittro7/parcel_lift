import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/admin/Analytics"));
const ManageAllUsers = lazy(() => import("@/pages/admin/manageAllUsers"));
const ManageAllParcels = lazy(() => import("@/pages/admin/manageAllParcels"));
const UpdateStatus = lazy(() => import("@/pages/admin/UpdateStatus"));
const Parcels = lazy(() => import("@/pages/admin/Parcels"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
      {
        title: "Parcels",
        url: "/admin/parcels",
        component: Parcels,
      },
      {
        title: "manage all users",
        url: "/admin/all-users",
        component: ManageAllUsers,
      },
      {
        title: " manage all parcels",
        url: "/admin/all-parcels",
        component: ManageAllParcels,
      },
      {
        title: " update parcel status",
        url: "/admin/update-status",
        component: UpdateStatus,
      },
    ],
  },
];