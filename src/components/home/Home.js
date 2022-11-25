import React from "react";
import AboutCard from "../about/AboutCard";
import Hero from "./hero/Hero";
import HomeAbout from "./HomeAbout";
import HomeBlog from "./HomeBlog";
import HomePrice from "./HomePrice";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HomeAbout />
      <Testimonial />
      {/* <HomeBlog /> */}
      <HomePrice />
    </>
  );
};

export default Home;
