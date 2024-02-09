"use client";

import React, { useState } from "react";
import "./About.css";
import { MagnoSans, neuo } from "@/app/font";
import Image from "next/image";
const About = () => {
  const [first, setfirst] = useState(false);

  const firstfeature = () => {
    setfirst(!first);
  };
  return (
    <>
      <div className="main__about">
        <div className="about__description">
          <div className="about__left">
            <div className="about__left__heading">
              <h1 className={MagnoSans.className}>WHY YOU CHOSE US?</h1>
            </div>
            <div className="about__left__features">
              <div className="first__feature">
                <h1
                  onClick={firstfeature}
                  className={`${neuo.className} feature__headings`}
                >
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
          <div className="about__right"></div>
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
