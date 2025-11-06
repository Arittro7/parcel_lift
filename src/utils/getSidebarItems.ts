import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { receiverSidebarItems } from "@/routes/receiverSidebarItems";
import { senderSidebarItems } from "@/routes/senderSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.Admin:
      return [...adminSidebarItems];
    case role.Sender:
      return [...senderSidebarItems];
    case role.Receiver:
      return [...receiverSidebarItems];
    default:
      return [];
  }
};