"use client";
import { VscChevronUp } from "react-icons/vsc";
import React, { useState } from "react";
import "./About.css";
import { MagnoSans, goldman, neuo } from "@/app/font";
import Image from "next/image";
import { motion, AnimatePresence, spring } from "framer-motion";

import { VscChevronDown } from "react-icons/vsc";
const About = () => {
  const [toggle, settoggle] = useState(true);

  const togglebutton = () => {
    settoggle(!toggle);
  };
  return (
    <>
      <div className="main__about" id="About">
        <div className="about__description">
          <div className="about__left">
            <div className="about__left__heading">
              <h1 className={MagnoSans.className}>WHY YOU CHOSE US?</h1>
            </div>
            <div className="about__left__features">
              <div className="first__feature">
                <h1 className={`${neuo.className} feature__headings`}>
                  Trusted Professionals
                </h1>
                <p className={`${neuo.className} feature__para`}>
                  Partner with a team of real estate experts committed to your
                  satisfaction. From property insights to transaction support,
                  we guide you every step of the way.
                </p>
                <hr />
              </div>
              <div className="second__feature">
                <h1 className={`${neuo.className} feature__headings`}>
                  Diverse Options
                </h1>
                <p className={`${neuo.className} feature__para`}>
                  Explore an extensive range of properties, from cozy rentals to
                  dream-worthy homes for purchase. Your perfect space is just a
                  click away.
                </p>
                <hr />
              </div>
              <div className="third__feature">
                <h1 className={`${neuo.className} feature__headings`}>
                  User-Centric Design
                </h1>
                <p className={`${neuo.className} feature__para`}>
                  Our website, meticulously crafted by experienced front-end
                  developers, ensures a smooth and enjoyable browsing
                  experience. Navigate effortlessly through listings, photos,
                  and essential details.
                </p>
                <hr />
              </div>
            </div>
          </div>
          <div className="about__right">
            <div onClick={togglebutton} className="stats__button">
              <h4 className={goldman.className}>
                View stats
                {!toggle ? (
                  <VscChevronDown size={30} style={{ marginLeft: "2px" }} />
                ) : (
                  <VscChevronUp size={30} style={{ marginLeft: "2px" }} />
                )}
              </h4>
            </div>
            <div className="main__stats">
              <AnimatePresence>
                {toggle ? (
                  <motion.div
                  
                    animate={{
                      bottom: "20vh",
                     
                    }}
                    transition={{
                      duration: 1.5,
                      type: "spring",
                    }}
                    exit={{
                      bottom: "60vh",
                      opacity: 0,
                      transition: {
                        duration: 1.5,
                        type: "spring",
                      },
                    }}
                    className={` ${MagnoSans.className}  stats__section`}
                  >
                    <div className="stats__section__children">
                      <h1>1000+</h1>
                      <h2 className={neuo.className}>
                        Total Properties Listed
                      </h2>
                    </div>
                    <div className="stats__section__children">
                      <h1>5+</h1>
                      <h2 className={neuo.className}>Countries Covered</h2>
                    </div>
                    <div className="stats__section__children">
                      <h1>25000</h1>
                      <h2 className={neuo.className}>Registered Users</h2>
                    </div>
                    <div className="stats__section__children">
                      <h1>4.5/5</h1>
                      <h2 className={neuo.className}>
                        Average Customer Rating
                      </h2>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="about__image">
          <Image
            src="/aboutbuilding.png"
            width={900}
            height={300}
            alt="image of a building"
          />
        </div>
      </div>
    </>
  );
};

export default About;
