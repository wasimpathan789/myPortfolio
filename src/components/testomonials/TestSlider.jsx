import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./TestomonialSlide.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { TestimonialsData } from "./TestomonilasData";

const TestSlider = () => {
  return (
    <div className="testomonials">
      <h1>Testomonial</h1>
      <div className="quote">
        <FaQuoteLeft className="quote" />
      </div>
      <Swiper
        dir="rtl"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {TestimonialsData.map((data, id) => (
          <SwiperSlide>
            <div className="testomonialSlide">
              <h3>{data.description}</h3>
              <h1>{data.name}</h1>
              <h2>{data.designation}</h2>
              <div className="testomonialImage">
                <img src={data.image} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="new">hhiidsfaf</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="new">hhiidsfaf</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="new">hhiidsfaf</div>
        </SwiperSlide> */}
      </Swiper>
      {/* 
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div> */}

      <button class="swiper-button-next">left</button>
      <button class="swiper-button-prev">right</button>
    </div>
  );
};

export default TestSlider;
