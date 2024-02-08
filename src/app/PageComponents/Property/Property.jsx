"use client";

import React from "react";
import "./Property.css";
import Image from "next/image";
import { MagnoSans, goldman } from "@/app/font";
import { motion } from "framer-motion";

const Property = () => {
  return (
    <>
      <div className="main__property">
        <div className="property__top__info">
          <motion.div
            initial={{
              height: "0%",
            }}
            whileInView={{
              height: "100%",
              transition: {
                type: "spring",
                duration: 3,
                stiffness:20
              },
            }}
            viewport={{
              once: true,
              margin: "-200px",
            }}
            className="property__top__image"
          >
            <Image
              src="/buy.png"
              width={400}
              height={400}
              alt="Image of a house"
            />
          </motion.div>
          <div className="property__top__description">
            <div className={` property__top__p`}>
              Discover your dream home in our 'Buy' section. From urban condos
              to suburban houses, find the perfect property for you. Start your
              journey today!
            </div>
            <div className={`  property__top__button`}>
              <h4 className={goldman.className}>BUY HOUSE</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
