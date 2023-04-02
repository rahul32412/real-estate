import React from "react";
import { useParams } from "react-router-dom";
import PropertiesData from "../data/Properties";

// importing the required icons
import { CiLocationOn } from "react-icons/ci";
import { TbRulerMeasure } from "react-icons/tb";
import { IoMdBed } from "react-icons/io";
import { BiBath } from "react-icons/bi";
import { MdSoupKitchen } from "react-icons/md";

import "../styles/Property.css";

// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function Property() {
  const { id } = useParams();
  return (
    <div className="property-wrapper">
      {PropertiesData.map(
        ({ heading, description, location, area, bhk, images }, index) => {
          if (index == id) {
            return (
              <div className="property" key={index}>
                <Swiper
                  modules={[Pagination, A11y]}
                  pagination={{ clickable: true }}
                >
                  {images.map((image, imageIndex) => {
                    return (
                      <SwiperSlide key={imageIndex}>
                        <div className="img">
                          <img src={image} alt="" />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className="content">
                  <h1 className="heading">{heading}</h1>
                  <h2 className="description">{description}</h2>

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
                        <span>{bhk.beds + " beds"}</span>
                      </li>
                      <li className="bathroom">
                        <BiBath />
                        <span>{bhk.bathrooms + " bathrooms"}</span>
                      </li>
                      <li className="kitchen">
                        <MdSoupKitchen />
                        <span>{bhk.kitchens + " kitchens"}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="CTA">
                    <a className="btn-call" href="tel:00">
                      Call
                    </a>
                    <a className="btn-whatsapp" href="#">
                      Whatsapp
                    </a>
                    <ul className="loan">
                      <li>Loan avaialable on</li>
                      <li>ICIC bank</li>
                      <li>SBI bank</li>
                      <li>HDFC bank</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          }
        }
      )}
    </div>
  );
}

export default Property;
