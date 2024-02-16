"use client";

import React from "react";
import "./Property.css";
import Image from "next/image";
import { MagnoSans, goldman, neuo } from "@/app/font";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
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
                stiffness: 20,
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
            <div className={`${neuo.className} property__top__p`}>
              Discover your dream home in our 'Buy' section. From urban condos
              to suburban houses, find the perfect property for you. Start your
              journey today!
            </div>

            <Link style={{ textDecoration: "none" }} href="/forsale">
              <div className={` property__top__button`}>
                <h4 className={goldman.className}>BUY HOUSE</h4>
                <div className="arrow">
                  <GoArrowUpRight size={30} />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="property__bottom__info">
          <div className="property__bottom__description">
            <div className={` ${neuo.className} property__bottom__p`}>
              Discover your dream home in our 'Buy' section. From urban condos
              to suburban houses, find the perfect property for you. Start your
              journey today!
            </div>
            <Link style={{ textDecoration: "none" }} href="/forrent">
              <div className="property__bottom__button">
                <h4 className={goldman.className}>RENT HOUSE</h4>
                <div className="arrow">
                  <GoArrowUpRight size={30} />
                </div>
              </div>
            </Link>
          </div>
          <motion.div
            initial={{
              height: "0%",
            }}
            whileInView={{
              height: "100%",
              transition: {
                type: "spring",
                duration: 3,
                stiffness: 20,
              },
            }}
            viewport={{
              once: true,
              margin: "-200px",
            }}
            className="property__bottom__img"
          >
            <Image
              src={"/rent2building.jpg"}
              width={400}
              height={400}
              alt="Image of a building"
            />
          </motion.div>
        </div>
        <div className="property__heading">
          <h1
            className={`${MagnoSans.className} property__heading__first__h1 `}
          >
            INVEST IN
          </h1>
          <motion.h1
            animate={{
              x: "-93%",
            }}
            transition={{
              ease: "linear",
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className={`${MagnoSans.className} property__heading__second__h1 `}
          >
            EXPERINCE <span>EXPERINCE</span>
          </motion.h1>
          <div className="heading__p">
            <p className={neuo.className}>
              Choose, Thrive: Uncover the freedom of ownership or indulge in the
              comfort of renting. Your perfect abode, your way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
