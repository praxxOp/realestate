import React from "react";
import Image from "next/image";
import "./Rentpage.css";
import { MagnoSans } from "@/app/font";
const Rentpage = ({ property: { coverPhoto, price, title, rooms, area } }) => {
  return (
    <div className="rent__page">
        
      <div className="left__main">
        <Image
          src={coverPhoto ? coverPhoto.url : null}
          width={500}
          height={500}
          style={{ borderRadius: "30px" }}
        />
      </div>
      <div className="right__main">
        <div className="title"></div>
      </div>
    </div>
  );
};

export default Rentpage;
