import React, { useRef, useEffect, useContext } from "react";
import { navContext } from "../contexts/nav-context";
import "../styles/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import heroSlides from "../data/hero-slide";

function HeroSlide({ heading, description, CTA, background }) {
  return (
    <div
      className="hero-slide"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="heading">{heading}</h1>
      <h2 className="description">{description}</h2>
      <div className="call-to-action">
        <a href="/property">{CTA}</a>
      </div>
    </div>
  );
}

function Hero() {
  const { setnavBg } = useContext(navContext);
  const HeroRef = useRef(null);
  useEffect(() => {
    const handleNavBG = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setnavBg(false);
      } else {
        setnavBg(true);
      }
    };
    const observer = new IntersectionObserver(handleNavBG, {
      threshold: 1,
    });
    observer.observe(HeroRef.current);
  }, []);

  return (
    <div className="hero" ref={HeroRef}>
      <Swiper modules={[Pagination, A11y]} pagination={{ clickable: true }}>
        {heroSlides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <HeroSlide
                heading={slide.heading}
                description={slide.description}
                CTA={slide.CTA}
                background={slide.background}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Hero;
