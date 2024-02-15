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
  const propertyDescriptions = [
    "Charming two-bedroom apartment with modern amenities, located in a peaceful neighborhood. This cozy home features a spacious living room, updated kitchen, and a private balcony with stunning views. Ideal for those seeking comfort and convenience.",
    "Luxurious penthouse with panoramic city views. This elegant property boasts high-end finishes, a gourmet kitchen, and a private rooftop terrace for entertaining. Experience the epitome of urban living in this exclusive residence.",
    "Quaint cottage in a picturesque setting, surrounded by lush gardens and scenic views. This charming property offers a serene escape with its rustic charm, inviting interiors, and a peaceful outdoor patio for relaxation.",
    "Contemporary loft-style living in the heart of the city. This stylish property showcases open-concept design, industrial accents, and floor-to-ceiling windows, providing abundant natural light. Perfect for urban enthusiasts.",
    "Spacious family home in a family-friendly neighborhood. Featuring four bedrooms, a large backyard, and a modern kitchen, this property offers the perfect blend of comfort and functionality for a growing family.",
    "Sleek and modern studio apartment with smart home technology. Enjoy the convenience of city living with this well-designed space, offering minimalist aesthetics and proximity to cultural hotspots and public transportation.",
    "Elegant townhouse with classic architecture and contemporary interiors. This sophisticated property boasts high ceilings, a grand staircase, and a private courtyard. Perfect for those who appreciate timeless style.",
    "Coastal retreat with ocean views and direct beach access. This beachfront property offers a relaxed lifestyle with spacious interiors, a gourmet kitchen, and a private deck for enjoying the sound of the waves.",
    "Historic mansion with period details and modern updates. Step into the past with this meticulously restored property, featuring ornate moldings, stained glass windows, and a charming garden. A true architectural gem.",
    "Modern duplex with a rooftop garden oasis. This urban sanctuary combines sleek design with green living, featuring energy-efficient amenities and a private rooftop space for gardening and outdoor gatherings.",
  ];
  const propertyForRent = await getData();
  const properties = await propertyForRent?.hits;

  return (
    <>
      <div className="main__rentpage">
        <div className={` ${MagnoSans.className} heading`}>RENT HOUSE</div>
        {properties.map((property, index) => (
          <Rentpage
            property={property}
            key={property.id}
            description={propertyDescriptions[index]}
          />
        ))}
      </div>
    </>
  );
};

export default Page;
