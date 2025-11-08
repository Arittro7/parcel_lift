import { ParcelCard } from "@/components/modules/Parcel/ParcelCard";
import { useGetDeliveredParcelsQuery } from "@/redux/features/Parcel/parcel.api";
import { useEffect } from "react";

const ViewDeliveryHistory = () => {
  useEffect(() => {
    document.title = "Dashboard | Parcel Lift ";
  }, []);
  const { data: deliveredParcels, isLoading } = useGetDeliveredParcelsQuery();
  if (isLoading) return <div>Loading parcels...</div>;
  return (
    <div>
      <h1 className="text-2xl font-semibold">Delivered parcels</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {deliveredParcels?.length ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          deliveredParcels.map((parcel: any) => (
            <ParcelCard key={parcel._id} parcel={parcel}></ParcelCard>
          ))
        ) : (
          <div>No parcels found</div>
        )}
      </div>
    </div>
  );
};

export default ViewDeliveryHistory;
