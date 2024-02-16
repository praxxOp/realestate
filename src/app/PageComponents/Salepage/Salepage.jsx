import React from "react";
import "./Salepage.css";
import { goldman, neuo } from "@/app/font";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
const Salepage = ({
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
    <div className="sale__page">
      <div className=" sale__left__main">
        <Image
          src={coverPhoto ? coverPhoto.url : null}
          width={500}
          height={500}
          style={{ borderRadius: "30px" }}
        />
      </div>
      <div className="sale__right__main">
        <div className="sale__room__info">
          <div className={`${neuo.className} title`}> {title} </div>
          <p className={neuo.className}>{description}</p>
          <h2 className={neuo.className}>
            Rooms : &nbsp; {rooms === 0 ? 2 : rooms}BHK
          </h2>
        </div>

        <div className="sale__room__pricing">
          <h1 className={neuo.className}> {numberWithCommas(price)}$</h1>
          <div className={` ${goldman.className} Buy__button`}>
            <h4>
              BUY HOUSE
              <GoArrowUpRight size={30} style={{ marginLeft: "10px" }} />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salepage;
