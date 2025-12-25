"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CEO from "@/assets/Team/CEO.png";
import Elo from "@/assets/Team/Elon_Musk.jpg";
import OpM from "@/assets/Team/Op man.jpg";
import { Link, useLocation } from "react-router";
import {
  Package,
  Truck,
  ShieldCheck,
  Globe,
  Users,
  Zap,
  Mail,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export const About = () => {
  useEffect(() => {
    document.title = "About | Parcel Lift ";
  }, []);

  const { pathname } = useLocation();

  const values = [
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      description:
        "We ensure every parcel is delivered safely, with full tracking and real-time updates.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Our logistics network guarantees on-time deliveries across cities and regions.",
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description:
        "From small towns to big cities, Parcel Lift connects customers everywhere.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "We prioritize customer satisfaction with transparent service and 24/7 support.",
    },
  ];

  const stats = [
    { number: "17K+", label: "Parcels Delivered", icon: Package },
    { number: "500+", label: "Daily Deliveries", icon: Truck },
    { number: "473", label: "Delivery Agents", icon: Users },
    { number: "70", label: "Cities Covered", icon: Globe },
  ];

  const team = [
    {
      name: "Nahid Arman",
      role: "Founder & CEO",
      image: CEO,
      bio: "A forward-thinking leader dedicated to transforming parcel delivery in Bangladesh with innovative, reliable solutions.",
    },
    {
      name: "Rasel Ahmed",
      role: "Operations Manager",
      image: OpM,
      bio: "A logistics and supply chain specialist dedicated to keeping processes efficient, deliveries punctual, and operations running smoothly.",
    },
    {
      name: "Elon Musk",
      role: "Tech Lead",
      image: Elo,
      bio: "A skilled full-stack developer driving the innovation behind Parcel Lift’s platform, ensuring robust technology and seamless user experiences.",
    },
  ];

  // Card animation variants
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
            className="mb-6 text-5xl md:text-6xl font-bold text-foreground"
          >
            About Parcel Lift
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Fast, Secure & Reliable{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              Parcel Delivery
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Parcel Lift is your trusted partner for sending and receiving parcels with speed, reliability, and complete peace of mind. We bridge the gap between people and businesses through efficient logistics.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <Card className="group hover:shadow-2xl transition-shadow duration-500 border-border/50 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-foreground mb-2">
                        {stat.number}
                      </div>
                      <div className="text-lg font-medium text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              🚀 Our Mission
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              📦 Seamless & Reliable Logistics
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Parcel Lift, our mission is simple — to connect people and businesses through dependable delivery. With Parcel Lift, every parcel arrives on time, every time.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
            <img
              src="https://res.cloudinary.com/dcp9nk3bs/image/upload/v1755283555/images_9_oth1tc.jpg"
              alt="Delivery Team"
              className="relative rounded-3xl shadow-2xl w-full object-cover h-96 lg:h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              What Drives Parcel Lift Forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={cardVariants}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm h-full">
                    <CardContent className="p-8 flex items-start gap-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {pathname === "/about" && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Meet Our Team
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {member.name}
                        </h3>
                        <p className="text-lg font-semibold text-primary mb-4">
                          {member.role}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {pathname === "/about" && (
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Zap className="h-20 w-20 mx-auto mb-8 text-yellow-300" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Ready to Ship with Parcel Lift?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to="/parcels">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-xl"
                >
                  Send a Parcel
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white hover:bg-white/20 text-white font-semibold text-lg px-8 py-6 backdrop-blur-sm"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};