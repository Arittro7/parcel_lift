/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  useGetUsersQuery,
  useToggleUserStatusMutation,
} from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import { useEffect } from "react";

const ManageAllUsers = () => {
  useEffect(() => {
    document.title = "Dashboard | Parcel Lift ";
  }, []);
  const { data: allUsers } = useGetUsersQuery();
  const [toggleStatus, { isLoading }] = useToggleUserStatusMutation();

  const handleToggle = async (id: string, status: string) => {
    let newStatus = "ACTIVE";

    if (status === "ACTIVE") {
      newStatus = "BLOCKED"; // Active → Block
    } else if (status === "BLOCKED") {
      newStatus = "ACTIVE"; // Blocked → Active
    } else if (status === "INACTIVE") {
      newStatus = "ACTIVE"; // Inactive → Active
    }
    const res = await toggleStatus({ id, isActive: newStatus });
    if (res.data.success) {
      toast.success(res.data.message);
    }
  };

  return (
    <div className="p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-semibold mb-6">👥 Manage All Users</h1>

      <Table>
        <TableCaption>A list of all registered users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {allUsers?.map((user: any) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user?.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge
                  variant={user.role === "ADMIN" ? "destructive" : "secondary"}
                  className="capitalize"
                >
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.isActive === "ACTIVE"
                      ? "default"
                      : user.isActive === "BLOCKED"
                      ? "destructive"
                      : "outline"
                  }
                  className="capitalize"
                >
                  {user.isActive}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Button
                  variant={
                    user.isActive === "ACTIVE" ? "destructive" : "default"
                  }
                  size="sm"
                  disabled={isLoading}
                  onClick={() => handleToggle(user._id, user.isActive)}
                >
                  {user.isActive === "ACTIVE"
                    ? "Block"
                    : user.isActive === "BLOCKED"
                    ? "Unblock"
                    : "Activate"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageAllUsers;
