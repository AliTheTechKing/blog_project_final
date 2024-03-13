import React from "react";

import CTA from "./container/CTA";

import MainLayout from "../../components/MainLayout";
import Articles from "./container/Articles";
import Hero from "./container/Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <CTA />

    </MainLayout>
    
  );
};

export default HomePage;