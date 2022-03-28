import "./header.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Header = () => (
  <div className="section">
    <div className="circle"></div>
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          The Delivery Platform For All Services.
        </h1>
        <p>
          Your Favourite Neighborhood services <br />
          right at your fingerprints
        </p>

        <div className="header-content__input">
          <button type="button">Get Started</button>
        </div>
      </div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./bab.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./cleaning.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./fitness.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./hair4.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./nails.webp" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  </div>
);

export default Header;
