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
// import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { useGetAllParcelsQuery } from "@/redux/features/Parcel/parcel.api";
import { toast } from "sonner";
import axios from "axios";

const UpdateStatus = () => {
  useEffect(() => {
    document.title = "Dashboard | Parcel Lift";
  }, []);

  const { data: allParcels, refetch } = useGetAllParcelsQuery();

  const handleStatusChange = async (parcelId: string, status: string) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/parcels/update-status/${parcelId}`,
        { status }, // body object
        {
          withCredentials: true, // ✅ browser cookies পাঠানোর জন্য
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        refetch();
        toast.success("Parcel status updated successfully!");
      } else {
        toast.error(response.data.message || "Failed to update parcel status.");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  const statusOptions = [
    "REQUESTED",
    "APPROVED",
    "DISPATCHED",
    "IN_TRANSIT",
    "DELIVERED",
    "CANCELLED",
    "FAILED_DELIVERY",
    "RESCHEDULED",
  ];

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
          </TableRow>
        </TableHeader>

        <TableBody>
          {allParcels?.map((parcel: any) => (
            <TableRow key={parcel._id}>
              <TableCell className="font-medium">{parcel.trackingId}</TableCell>
              <TableCell>{parcel.senderInfo.name || "N/A"}</TableCell>
              <TableCell>{parcel.deliveryLocation.name || "N/A"}</TableCell>
              <TableCell>
                <select
                  value={parcel.status}
                  onChange={(e) =>
                    handleStatusChange(parcel._id, e.target.value)
                  }
                  className="px-2 py-1 rounded-md border border-gray-300"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UpdateStatus;
