import React from "react";
import "./Home.css";
import { delagothicone, goldman, michroma, sora } from "@/app/font";
const Home = () => {
  return (
    <>
      <div className="main__home">
        <div className="headings__home">
          <div className="button">
            <h4 className={goldman.className}>EXPLORE</h4>
          </div>
          <h1 className={michroma.className}>
            Prime <sup>®</sup>
          </h1>
          <h1 className={delagothicone.className}>Properties</h1>
        </div>
        <p className={sora.className}>
          "Unlock Dreams: Elevate your lifestyle with our premier real estate
          solutions at Epic Estates. Discover exceptional properties and turn
          your aspirations into reality."
        </p>
      </div>
    </>
  );
};

export default Home;
