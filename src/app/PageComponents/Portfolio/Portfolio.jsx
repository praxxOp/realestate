import React from "react";
import "./Portfolio.css";
import { GoArrowUpRight } from "react-icons/go";
import { goldman, neuo } from "@/app/font";
const Portfolio = () => {
  return (
    <>
      <div className="portfolio__main">
        <p className={neuo.className}>
          I've crafted This website to showcase my expertise in API integration
          and data handling. Its user-friendly design incorporates captivating
          animations for visual appeal. Dive into live API demos and interactive
          data visualizations to witness firsthand how I excel in these areas.
        </p>
        <div className="portfolio__button">
        <a className={goldman.className} href="https://prathameshh.netlify.app/" target="_blank" rel="noopener noreferrer"> MY PORTFOLIO</a>
          <GoArrowUpRight size={30} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
