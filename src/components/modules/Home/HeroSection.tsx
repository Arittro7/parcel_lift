"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, Truck, Shield, Clock } from "lucide-react";
import Logo2 from "@/assets/icon/Logo2.png";
import Bnr from "@/assets/icon/banner.jpg";
import type { IParcel } from "@/types";
import { useGetParcelByTrackingIdQuery } from "@/redux/features/Parcel/parcel.api";

export default function HeroSection() {
  const [trackingId, setTrackingId] = useState("");
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [pulse, setPulse] = useState(false);

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

  const features = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      text: "Lightning Fast Delivery",
      color: "text-yellow-300",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      text: "Nationwide Coverage",
      color: "text-green-300",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Fully Insured Parcels",
      color: "text-blue-300",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Real-Time Tracking",
      color: "text-purple-300",
    },
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Pulse animation for Track button
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Animated Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          alt="background"
          src={Bnr}
          className="h-full w-full object-cover [mask-image:radial-gradient(85%_85%_at_center,white,transparent)]"
        />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-6 h-6 bg-yellow-300 rounded-full opacity-40"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-8 h-8 bg-blue-300 rounded-full opacity-30"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-md mb-8"
          >
            <img src={Logo2} alt="Logo" className="h-48 w-auto" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
           Fastest⚡Parcel Network in
            <br />
            <span className="text-yellow-300">Bangladesh</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto max-w-3xl text-lg  md:text-xl mb-10"
          >
            Experience reliable courier solutions designed for modern needs. Manage, monitor, and deliver with ease — because every parcel deserves care.
          </motion.p>

          {/* Animated Feature Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20",
                  currentFeature === index && "bg-white/25 shadow-lg"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={currentFeature === index ? { rotate: 360 } : {}}
                  transition={{ duration: 0.6 }}
                  className={feature.color}
                >
                  {feature.icon}
                </motion.div>
                <span className="text-sm md:text-base font-medium">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Tracking Input with Pulse Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex w-full max-w-md gap-3"
          >
            <Input
              placeholder="Enter Tracking ID"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="bg-white/10 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
            />
            <motion.div
              animate={{
                scale: pulse ? [1, 1.05, 1] : 1,
                boxShadow: pulse
                  ? [
                      "0 0 0 0 rgba(255, 255, 255, 0)",
                      "0 0 0 12px rgba(255, 255, 255, 0.2)",
                      "0 0 0 0 rgba(255, 255, 255, 0)",
                    ]
                  : "none",
              }}
              transition={{ duration: 0.8 }}
            >
              <Button
                onClick={handleTrack}
                size="lg"
                className="relative overflow-hidden bg-white text-primary hover:bg-gray-100"
              >
                <span className="relative flex items-center">
                  Track
                  <Truck className="w-4 h-4 ml-2" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Results Section (unchanged logic & layout) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 w-full max-w-2xl"
          >
            {isFetching && (
              <p className="text-white/80 animate-pulse">Loading parcel details...</p>
            )}
            {isError && (
              <p className="text-red-300 text-lg">No parcel found with that tracking ID.</p>
            )}
            {parcels &&
              parcels.map((parcel: IParcel) => (
                <motion.div
                  key={parcel._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="mt-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
                    <CardContent className="p-6 text-left">
                      <h3 className="font-bold text-xl mb-3">
                        {parcel.name} ({parcel.trackingId})
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
                        <p>
                          Status:{" "}
                          <span className="font-semibold text-yellow-300">
                            {parcel.status}
                          </span>
                        </p>
                        <p>Cost: <span className="font-medium">${parcel.cost}</span></p>
                        <p>Weight: <span className="font-medium">{parcel.weight}kg</span></p>
                        <p>
                          Pickup:{" "}
                          <span className="font-medium">
                            {new Date(parcel.pickUpDate).toLocaleDateString()}
                          </span>
                        </p>
                        <p>
                          Estimated Delivery:{" "}
                          <span className="font-medium">
                            {new Date(parcel.estimatedDeliveryDate).toLocaleDateString()}
                          </span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <motion.path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            initial={{ pathLength: 0, opacity: 0.8 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
}