import React from "react";
import AboutCard from "../about/AboutCard";
import Hero from "./hero/Hero";
import HomeAbout from "./HomeAbout";
import HomeBlog from "./HomeBlog";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HomeAbout />
      <Testimonial />
      <HomeBlog />
    </>
  );
};

export default Home;
