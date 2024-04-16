import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
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
    </div>
  );
};

export default Home;
