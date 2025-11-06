import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CEO from "@/assets/Team/CEO.png"
import Elo from "@/assets/Team/Elon_Musk.jpg"
import OpM from "@/assets/Team/Op man.jpg"
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
    { number: "10K+", label: "Parcels Delivered", icon: Package },
    { number: "500+", label: "Daily Deliveries", icon: Truck },
    { number: "100+", label: "Delivery Agents", icon: Users },
    { number: "50+", label: "Cities Covered", icon: Globe },
  ];

  const team = [
    {
      name: "Nahid Arman",
      role: "Founder & CEO",
      image:CEO,
      bio: "- A forward‑thinking leader dedicated to transforming parcel delivery in Bangladesh with innovative, reliable solutions",
    },
    {
      name: "Rasel Ahmed",
      role: "Operations Manager",
      image:OpM,
      bio: "A logistics and supply chain specialist dedicated to keeping processes efficient, deliveries punctual, and operations running smoothly.",
    },
    {
      name: "Elon Musk",
      role: "Tech Lead",
      image:Elo,
      bio: "A skilled full‑stack developer driving the innovation behind Parcel Lift’s platform, ensuring robust technology and seamless user experiences.",
    },
  ];

  return (
    <div className=" bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-600 hover:bg-blue-700 text-lg px-6 py-2">
            <span className="pacifico-regular text-white">
              About Parcel Lift
            </span>
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Fast, Secure & Reliable
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Parcel Delivery
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Parcel Lift is your trusted partner for sending and receiving
            parcels with speed, reliability, and complete peace of mind. We
            bridge the gap between people and businesses through efficient
            logistics.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold  mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Our Mission
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Delivering Trust Across Every Parcel
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Parcel Lift, our mission is to make parcel delivery seamless,
              secure, and accessible for everyone. Whether it's personal
              packages or business shipments, we ensure your parcels reach
              safely and on time.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
            <img
              src="https://res.cloudinary.com/dcp9nk3bs/image/upload/v1755283555/images_9_oth1tc.jpg"
              alt="Delivery Team"
              className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">
            Our Values
          </Badge>
          <h2 className="pacifico-regular text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Drives Parcel Lift
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardContent className="p-8 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      {pathname === "/about" && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h1 className="text-3xl text-black font-semibold">Meet Our Team</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-green-500 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      {pathname === "/about" && (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
          <Zap className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ship with Parcel Lift?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/parcels">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                Send a Parcel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-whit hover:bg-white text-blue-600 font-semibold"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};
