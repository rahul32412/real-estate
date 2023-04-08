import React from "react";
import "../styles/Properties.css";
import PropertiesData from "../data/Properties";

// importing the required icons
import { CiLocationOn } from "react-icons/ci";
import { TbRulerMeasure } from "react-icons/tb";
import { IoMdBed } from "react-icons/io";
import { BiBath } from "react-icons/bi";
import { MdSoupKitchen } from "react-icons/md";
import { Link } from "react-router-dom";

const Property = ({
  id,
  images,
  heading,
  description,
  location,
  area,
  bhk,
}) => {
  return (
    <Link to={"/property/" + id}>
      <div className="property">
        <div className="img">
          <img src={images[0]} alt="" />
        </div>
        <div className="content">
          <h3 className="heading">{heading}</h3>
          <h4 className="description">
            {description.substring(0, 100) + "..."}
          </h4>

          <div className="details">
            <ul className="location">
              <li>
                <CiLocationOn />
                Location
              </li>
              <li>{location}</li>
            </ul>
            <ul className="area">
              <li>
                <TbRulerMeasure />
                Area
              </li>
              <li>{area}</li>
            </ul>
            <ul className="bhk">
              <li className="bed">
                <IoMdBed />
                <span>{bhk.beds}</span>
              </li>
              <li className="bathroom">
                <BiBath />
                <span>{bhk.bathrooms}</span>
              </li>
              <li className="kitchen">
                <MdSoupKitchen />
                <span>{bhk.bathrooms}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

function Properties() {
  return (
    <div className="properties">
      {PropertiesData.map(
        ({ heading, images, description, location, area, bhk }, index) => (
          <Property
            id={index}
            images={images}
            heading={heading}
            description={description}
            location={location}
            area={area}
            bhk={bhk}
            key={index}
          />
        )
      )}
    </div>
  );
}

export default Properties;
