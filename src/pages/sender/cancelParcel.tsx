import { ParcelCard } from "@/components/modules/Parcel/ParcelCard";
import {
  useCancelParcelMutation,
  useGetParcelsQuery,
} from "@/redux/features/Parcel/parcel.api";
import { useEffect } from "react";
import { toast } from "sonner";

export default function CancelParcel() {
  useEffect(() => {
    document.title = "Dashboard | Parcel Lift ";
  }, []);
  const { data: parcels, isLoading } = useGetParcelsQuery();

  const [cancelParcel] = useCancelParcelMutation();

  const handleCancel = async (id: string, status: string) => {
    if (status === "CANCELLED") {
      return toast.error("This parcel is already canceled");
    }
    try {
      const res = await cancelParcel(id).unwrap(); // call mutation
      if (res.success) {
        toast.success("Parcel cancelled successfully!");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // console.error(error);
      toast.error(error?.data?.message);
    }
  };

  if (isLoading) return <div>Loading parcels...</div>;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Cancel Parcel</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {parcels?.length ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          parcels.map((parcel: any) => (
            <ParcelCard
              key={parcel._id}
              parcel={parcel}
              onCancel={handleCancel}
            ></ParcelCard>
          ))
        ) : (
          <div>No parcels found</div>
        )}
      </div>
    </div>
  );
}
