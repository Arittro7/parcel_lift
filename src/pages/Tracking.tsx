import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Package, Truck, MapPin, Calendar, DollarSign, Scale } from "lucide-react";
import { useGetParcelByTrackingIdQuery } from "@/redux/features/Parcel/parcel.api";
import { useState } from "react";

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  
  const {
    data: parcels,
    isFetching,
    isError,
  } = useGetParcelByTrackingIdQuery(submittedId!, {
    skip: !submittedId,
  });

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setSubmittedId(trackingId.trim());
    }
  };

  const parcel = parcels?.[0]; // Assuming single parcel per tracking ID

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered": return "text-green-600 bg-green-100";
      case "in transit": return "text-blue-600 bg-blue-100";
      case "pending": return "text-yellow-600 bg-yellow-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-12 px-4">
      {/* Hero/Tracking Input Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Package className="h-24 w-24 text-indigo-600" />
            <Truck className="h-12 w-12 text-indigo-400 absolute -bottom-4 -right-4" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Track Your Parcel
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Enter your tracking ID to get real-time updates on your shipment
        </p>

        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <div className="flex-1">
            <Label htmlFor="tracking" className="sr-only">Tracking ID</Label>
            <Input
              id="tracking"
              placeholder="Enter Tracking ID (e.g. PL123456)"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="text-lg h-12"
            />
          </div>
          <Button type="submit" size="lg" className="h-12 px-8 text-white bg-indigo-600 hover:bg-indigo-700">
            Track Parcel
          </Button>
        </form>
      </div>

      {/* Results Section */}
      <div className="max-w-4xl mx-auto">
        {isFetching && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
            <p className="mt-4 text-lg text-gray-600">Searching for your parcel...</p>
          </div>
        )}

        {isError && (
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-8 text-center">
              <p className="text-xl text-red-700">No parcel found with that tracking ID.</p>
              <p className="mt-2 text-gray-600">Please check the ID and try again.</p>
            </CardContent>
          </Card>
        )}

        {parcel && (
          <div className="space-y-8">
            {/* Parcel Summary Card */}
            <Card className="overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{parcel.name}</h2>
                    <p className="text-indigo-200 text-lg">Tracking ID: {parcel.trackingId}</p>
                  </div>
                  <div className={`px-6 py-3 rounded-full text-lg font-semibold ${getStatusColor(parcel.status)}`}>
                    {parcel.status}
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-4">
                    <DollarSign className="h-10 w-10 text-indigo-600" />
                    <div>
                      <p className="text-gray-600">Cost</p>
                      <p className="text-2xl font-bold">${parcel.cost}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Scale className="h-10 w-10 text-indigo-600" />
                    <div>
                      <p className="text-gray-600">Weight</p>
                      <p className="text-2xl font-bold">{parcel.weight} kg</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Calendar className="h-10 w-10 text-indigo-600" />
                    <div>
                      <p className="text-gray-600">Est. Delivery</p>
                      <p className="text-xl font-bold">
                        {new Date(parcel.estimatedDeliveryDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Locations */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-indigo-600" /> Sender Address
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {parcel.senderInfo.street}<br />
                      {parcel.senderInfo.city}, {parcel.senderInfo.zip}<br />
                      {parcel.senderInfo.division}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-green-600" /> Delivery Address
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {parcel.deliveryLocation.street}<br />
                      {parcel.deliveryLocation.city}, {parcel.deliveryLocation.zip}<br />
                      {parcel.deliveryLocation.division}
                    </p>
                  </div>
                </div>

                {/* Pickup Date */}
                <div className="mt-8 pt-6 border-t">
                  <p className="text-gray-600">
                    Pickup Date: <span className="font-semibold">
                      {new Date(parcel.pickUpDate).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;