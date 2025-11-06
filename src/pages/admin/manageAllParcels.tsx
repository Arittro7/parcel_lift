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
  useBlockParcelMutation,
  useGetAllParcelsQuery,
  useUnblockParcelMutation,
} from "@/redux/features/Parcel/parcel.api";
import { toast } from "sonner";
import { useEffect } from "react";

const ManageAllParcels = () => {
  useEffect(() => {
    document.title = "Dashboard | Parcel Lift ";
  }, []);
  const { data: allParcels } = useGetAllParcelsQuery();
  const [blockParcel] = useBlockParcelMutation();
  const [unblockParcel] = useUnblockParcelMutation();

  const handleBlock = async (id: string) => {
    try {
      const res: any = await blockParcel(id).unwrap();
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message || "Failed to block parcel");
      }
    } catch (err: any) {
      toast.error(
        err.data?.message || "Something went wrong while blocking parcel"
      );
    }
  };

  const handleUnblock = async (id: string) => {
    try {
      const res: any = await unblockParcel(id).unwrap();
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message || "Failed to unblock parcel");
      }
    } catch (err: any) {
      toast.error(
        err.data?.message || "Something went wrong while unblocking parcel"
      );
    }
  };

  return (
    <div className="p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-semibold mb-6">📦 Manage All Parcels</h1>

      <Table>
        <TableCaption>A list of all parcels.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Tracking ID</TableHead>
            <TableHead>Sender</TableHead>
            <TableHead>Receiver</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {allParcels?.map((parcel: any) => (
            <TableRow key={parcel._id}>
              <TableCell className="font-medium">{parcel.trackingId}</TableCell>
              <TableCell>{parcel.senderInfo.name || "N/A"}</TableCell>
              <TableCell>{parcel.deliveryLocation.name || "N/A"}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    parcel.status === "PENDING"
                      ? "default"
                      : parcel.status === "IN_TRANSIT"
                      ? "secondary"
                      : "destructive"
                  }
                  className="capitalize"
                >
                  {parcel.status}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                {parcel.isBlocked ? (
                  <Button onClick={() => handleUnblock(parcel._id)}>
                    Unblock
                  </Button>
                ) : (
                  <Button onClick={() => handleBlock(parcel._id)}>Block</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageAllParcels;
