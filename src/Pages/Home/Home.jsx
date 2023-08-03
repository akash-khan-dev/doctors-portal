import React from "react";
import { BannerContent } from "../../Components/BannerContent/BannerContent";
import { BusinesInfo } from "../../Components/BusinesInfo/BusinesInfo";
import { Contact } from "../../Components/ContactFrom/Contact";
import { Doctor } from "../../Components/Doctors/Doctor";

import { Navbar } from "../../Components/Navbar/Navbar";
import { Blog } from "../Blog/Blog";
import { Service } from "../Service/Service";
import { Testimonial } from "../Testimonial/Testimonial";
import "./Home.css";
import Footer from "../../Components/footer/Footer";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home">
          <Navbar />
          <BannerContent />
          <BusinesInfo />
          <Service />
          <Testimonial />
          <Blog />
          <Doctor />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};
