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
                Create an account, enter sender and receiver details, select your delivery option, and confirm your booking. A courier will then collect the parcel directly from your location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can I track my parcel in real-time?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Every parcel is assigned a unique tracking ID. Use it on our website to follow your parcel’s journey live, from pickup to delivery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What areas do you deliver to?</AccordionTrigger>
              <AccordionContent>
                We currently serve all major cities and districts across Bangladesh. New service locations are being added regularly to expand our coverage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How much does delivery cost?</AccordionTrigger>
              <AccordionContent>
                Charges vary depending on parcel weight, dimensions, and destination. You’ll see the estimated cost before confirming your booking.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                What happens if my parcel is delayed or lost?
              </AccordionTrigger>
              <AccordionContent>
                If there’s a delay, we’ll notify you via SMS and email. In the rare case of a lost parcel, our team provides full support and compensation according to company policy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};
