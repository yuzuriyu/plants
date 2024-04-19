import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import HomeGrid from "@/components/HomeGrid";
import Newsletter from "@/components/Newsletter";
import Slider from "@/components/Slider";
import Testimonial from "@/components/Testimonial";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <Featured />
      <Testimonial />
      <HomeGrid />
      <Newsletter />
    </div>
  );
};

export default Home;
