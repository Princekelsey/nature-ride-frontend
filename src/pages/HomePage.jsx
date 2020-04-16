import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Features from "../components/features/Features";
import Tours from "../components/tours/Tours";

const HomePage = () => {
  return (
    <main>
      <Header />
      <About />
      <Features />
      <Tours />
    </main>
  );
};

export default HomePage;
