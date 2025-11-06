"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

export const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ | Parcel Lift ";
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>

      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I send a parcel with Parcel Lift?
              </AccordionTrigger>
              <AccordionContent>
                Simply create an account, fill in the sender and receiver
                details, choose your delivery option, and confirm your booking.
                A courier will pick up your parcel from your location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can I track my parcel in real-time?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Every parcel gets a unique tracking ID. You can use it on
                our website to monitor your parcel’s journey in real-time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What areas do you deliver to?</AccordionTrigger>
              <AccordionContent>
                We currently operate across all major cities and districts in
                Bangladesh. More locations are being added regularly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How much does delivery cost?</AccordionTrigger>
              <AccordionContent>
                Delivery charges depend on the parcel’s weight, dimensions, and
                destination. You can check the estimated cost before confirming
                your booking.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                What happens if my parcel is delayed or lost?
              </AccordionTrigger>
              <AccordionContent>
                In case of delays, we keep you updated via SMS and email. If a
                parcel is lost, we provide full support and compensation as per
                our policy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};
