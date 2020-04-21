import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Features from "../components/features/Features";
import TourList from "../components/tours/TourList";
import Testmonial from "../components/testmonial/Testmonial";
import Booking from "../components/booking/Booking";

const HomePage = ({ setModal }) => {
  return (
    <main>
      <Header />
      <About />
      <Features />
      <TourList setModal={setModal} />
      <Testmonial />
      <Booking />
    </main>
  );
};

export default HomePage;
