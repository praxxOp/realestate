import React from "react";
import "./Navbar.css";
import { goldman, michroma } from "@/app/font";
const Navbar = () => {
  return (
    <>
      <div className={` ${goldman.className} main__navbar`}>
        <h4>REAL ESTATES</h4>
        <div className="mid__nav">
          <h4>Buy House</h4>
          <h4>Rent House</h4>
        </div>
        <h4>about-us</h4>
      </div>
    </>
  );
};

export default Navbar;
