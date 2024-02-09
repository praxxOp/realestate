import React from "react";
import "./Portfolio.css";
import { GoArrowUpRight } from "react-icons/go";
import { MagnoSans, goldman } from "@/app/font";
const Portfolio = () => {
  return (
    <>
      <div className="portfolio__main">
        <p>
          I've crafted This website to showcase my expertise in API integration and
          data handling. Its user-friendly design incorporates captivating
          animations for visual appeal. Dive into live API demos and interactive
          data visualizations to witness firsthand how I excel in these areas.
        </p>
        <div className="portfolio__button">
          <h4 className={goldman.className}>MY PORTFOLIO</h4>
          <GoArrowUpRight size={30} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
