import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./carousel.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function CarouselSwiper(props) {
  const slides = () =>
    props.images.map((image, i) => {
      return (
        <SwiperSlide
          style={{
            color: "black",
            height: "100%",
            width: "100%",
            objectFit: "fill",
          }}
        >
          <img
            src={image}
            alt={`test-${i}`}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "fill",
            }}
          />
        </SwiperSlide>
      );
    });

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
      >
        {slides()}
      </Swiper>
    </>
  );
}
