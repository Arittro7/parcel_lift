"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  Package,
  Truck,
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Parcel Lift";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success(
        "Your message has been sent! Our support team will reach out soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "For customer support & enquiries",
      value: "arittro007@gmail.com",
      action: "mailto:arittro007@gmail.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our delivery support",
      value: "+880 1773-993397",
      action: "tel:+8801773993397",
    },
    {
      icon: MapPin,
      title: "Head Office",
      description: "Visit our service center",
      value: "Keranipara, Rangpur Bangladesh",
      action: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      description: "We’re available to assist",
      value: "Sat-Thu: 9AM - 5PM",
      action: "#",
    },
  ];

  const reasons = [
    {
      icon: Package,
      title: "Parcel Enquiries",
      description: "Questions about sending or tracking a parcel",
    },
    {
      icon: Truck,
      title: "Delivery Support",
      description: "Need help with a pickup, delay, or lost package",
    },
    {
      icon: Mail,
      title: "Business Partnership",
      description: "Collaborations with eCommerce & enterprises",
    },
  ];

  // Animation variants
  const cardVariants = {
    offscreen: { y: 60, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-8"
          >
            📞 Get in Touch with Parcel Lift
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            We’re always here to support you. From parcel inquiries to delivery assistance or business partnerships, our team ensures quick and reliable responses.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <Card className="group hover:shadow-2xl transition-shadow duration-500 border-border/50 bg-card/80 backdrop-blur-sm text-center h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {info.description}
                      </p>
                      <a
                        href={info.action}
                        className="text-lg font-semibold text-primary hover:underline"
                      >
                        {info.value}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="shadow-2xl border-border/50 bg-card/90 backdrop-blur-sm">
                <CardContent className="p-10">
                  <h2 className="text-3xl font-bold text-foreground mb-8">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={8}
                        placeholder="Tell us more..."
                        className="bg-background/50 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg py-7 shadow-xl"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar - Why Contact Us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Card className="shadow-xl border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-8">
                    Why Contact Us?
                  </h3>
                  <div className="space-y-6">
                    {reasons.map((reason, index) => {
                      const Icon = reason.icon;
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">
                              {reason.title}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {reason.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};