import React from "react";
import "./Forrent.css";
import Rentpage from "../PageComponents/Rentpage/Rentpage";
import { MagnoSans } from "../font";

async function getData() {
  const baseUrl = "https://bayut.p.rapidapi.com";
  const res = await fetch(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();
  return data;
}

const Page = async () => {
  const propertyForRent = await getData();
  const properties = await propertyForRent?.hits;
  
  return (
    <>
    <div className="main__rentpage">
    <div className={` ${MagnoSans.className} heading`}>
      RENT HOUSE
    </div>
      {properties.map((property) => 
        <Rentpage property={property} key={property.id}/>
      )}
      </div>
    </>
  );
};

export default Page;
