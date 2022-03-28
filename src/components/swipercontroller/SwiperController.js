import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swipercontroller.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function SwiperController() {
  return (
    <>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
      </Swiper> */}
    </>
  );
}
