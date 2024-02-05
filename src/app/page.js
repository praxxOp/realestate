import React from "react";
import { delagothicone, goldman } from "./font";
import Home from "./PageComponents/Home/Home";
import Property from "./PageComponents/Property/Property";
import Portfolio from "./PageComponents/Portfolio/Portfolio";
import About from "./PageComponents/About/About";

const Page = () => {
  return (
    <>
    <Home/>
    <Property/>
    <Portfolio/>
    <About/>
    </>
  );
};

export default Page;
