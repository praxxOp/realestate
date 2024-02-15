import React from "react";
import Image from "next/image";
import "./Rentpage.css";
import { goldman, neuo } from "@/app/font";
import { GoArrowUpRight } from "react-icons/go";

const Rentpage = ({
  property: { coverPhoto, price, title, rooms },
  description,
}) => {
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }
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
        <div className="room__info">
          <div className={`${neuo.className} title`}> {title} </div>
          <p className={neuo.className}>{description}</p>
          <h2 className={neuo.className}>
            Rooms : &nbsp; {rooms === 0 ? 2 : rooms}BHK
          </h2>
        </div>

        <div className="room__pricing">
          <h1 className={neuo.className}> {numberWithCommas(price)}$/month</h1>
          <div className={` ${goldman.className} rent__button`}>
            <h4>
              RENT HOUSE
              <GoArrowUpRight size={30} style={{ marginLeft: "10px" }} />{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rentpage;
