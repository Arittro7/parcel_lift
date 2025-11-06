import HeroSection from "@/components/modules/Home/HeroSection";
import { About } from "./About";
import { Contact } from "./Contact";
import LocationMap from "@/components/modules/Home/LocationMap";
import { FAQ } from "./FAQ";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    document.title = "Home | Parcel Lift ";
  }, []);
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <LocationMap></LocationMap>
      <Contact></Contact>
      <FAQ></FAQ>
    </div>
  );
};
