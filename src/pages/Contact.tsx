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

export const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Parcel Lift ";
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
      value: "support@deliveryexpress.com",
      action: "mailto:support@deliveryexpress.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our delivery support",
      value: "+880 1234-567890",
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

  return (
    <div className=" bg-gradient-to-br from-green-200 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-5xl font-semibold text-purple-800">
            Our Values
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            📞 Get in Touch with Parcel Lift
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We’re always here to support you. From parcel inquiries to delivery assistance or business partnerships, our team ensures quick and reliable responses.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold  mb-2">{info.title}</h3>
                <p className="text-sm text-slate-400 mb-3">
                  {info.description}
                </p>
                <a href={info.action} className="font-semibold text-green-400">
                  {info.value}
                </a>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Contact Form */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-green-600 mb-4">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us more..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-green-700 hover:to-green-300 font-semibold"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold  mb-6">Why Contact Us?</h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => {
                    const Icon = reason.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{reason.title}</h4>
                          <p className="text-sm text-slate-400">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};
