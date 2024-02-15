import React from "react";
import "./Navbar.css";
import { goldman } from "@/app/font";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className={` ${goldman.className} main__navbar`}>
        <Link style={{ textDecoration: "none" }} href="/">
          <h4 className="logo">REAL ESTATES</h4>
        </Link>
        <div className="mid__nav">
          <h4>Buy House</h4>
          <Link style={{ textDecoration: "none" }} href="/forrent">
            <h4>Rent House</h4>
          </Link>
        </div>
        <Link style={{ textDecoration: "none" }} href="#About">
          <h4 className="right__nav">about-us</h4>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
