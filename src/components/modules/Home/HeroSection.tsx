"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo2 from "@/assets/icon/Logo2.png";
import Bnr from "@/assets/icon/banner.jpg"
import { Card, CardContent } from "@/components/ui/card";
import type { IParcel } from "@/types";
import { useGetParcelByTrackingIdQuery } from "@/redux/features/Parcel/parcel.api";

export default function HeroSection() {
  const [trackingId, setTrackingId] = useState("");
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const {
    data: parcels,
    isFetching,
    isError,
  } = useGetParcelByTrackingIdQuery(submittedId!, {
    skip: !submittedId,
  });

  const handleTrack = () => {
    if (trackingId.trim()) {
      setSubmittedId(trackingId.trim());
    }
  };

  return (
    <section className="relative overflow-hidden py-20 min-h-[calc(100vh-145px)]">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <img
          alt="background"
          src={Bnr}
          className="[mask-image:radial-gradient(85%_85%_at_center,white,transparent)]"
        />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Logo */}
          <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm mb-6">
            <img src={Logo2} alt="Logo" className="h-48 w-auto" />
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-pretty lg:text-5xl">
            Bangladesh’s Fastest ⚡
            <span className="text-primary">Parcel Network</span>
          </h1>
          <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl mb-6">
            Experience reliable courier solutions designed for modern needs. Manage, monitor, and deliver with ease — because every parcel deserves care.
          </p>

          {/* Tracking Input */}
          <div className="flex w-full max-w-md gap-2">
            <Input
              placeholder="Enter Tracking ID"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
            />
            <Button onClick={handleTrack}>Track</Button>
          </div>

          {/* Results */}
          <div className="mt-8 w-full max-w-2xl">
            {isFetching && (
              <p className="text-sm text-muted-foreground">Loading...</p>
            )}
            {isError && (
              <p className="text-sm text-red-500">No parcel found.</p>
            )}
            {parcels &&
              parcels.map((parcel: IParcel) => (
                <Card key={parcel._id} className="mt-4">
                  <CardContent className="p-4 text-left">
                    <h3 className="font-semibold text-lg">
                      {parcel.name} ({parcel.trackingId})
                    </h3>
                    <p>
                      Status:{" "}
                      <span className="font-medium">{parcel.status}</span>
                    </p>
                    <p>Cost: ${parcel.cost}</p>
                    <p>Weight: {parcel.weight}kg</p>
                    <p>
                      Pickup: {new Date(parcel.pickUpDate).toLocaleDateString()}
                    </p>
                    <p>
                      Estimated Delivery:{" "}
                      {new Date(
                        parcel.estimatedDeliveryDate
                      ).toLocaleDateString()}
                    </p>
                    <div className="mt-2">
                      <p className="font-semibold">Sender Info:</p>
                      <p>
                        {parcel.senderInfo.division}, {parcel.senderInfo.city},{" "}
                        {parcel.senderInfo.zip}, {parcel.senderInfo.street}
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="font-semibold">Delivery Location:</p>
                      <p>
                        {parcel.deliveryLocation.division},{" "}
                        {parcel.deliveryLocation.city},{" "}
                        {parcel.deliveryLocation.zip},{" "}
                        {parcel.deliveryLocation.street}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
