"use client";
import React from "react";
import "./Home.css";
import { MagnoSans, goldman } from "@/app/font";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div className="main__home">
        <div className="headings__home">
          <div className="button">
             <h4 className={goldman.className}>EXPLORE</h4> 
          </div>
          <h1 className={` ${MagnoSans.className} prime__h1`}>
            Prime <sup>®</sup>
          </h1>
          <h1 className={` ${MagnoSans.className} prop__h1`}>
            {"Properties".split("").map((item, index) => (
              <motion.span
                initial={{
                  y: "200%",
                }}
                animate={{
                  y: "0",
                  transition: {
                    delay: index * 0.2,
                    duration: 1,
                  },
                }}
              >
                {item}
              </motion.span>
            ))}
          </h1>
        </div>
        <p>
          Unlock Dreams: Elevate your lifestyle with our premier real estate
          solutions at Epic Estates. Discover exceptional properties and turn
          your aspirations into reality.
        </p>
      </div>
    </>
  );
};

export default Home;
