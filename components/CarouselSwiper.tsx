import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";

import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./carousel.module.css";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";

export default function CarouselSwiper(props: { images: string[] }) {
  const slides = () =>
    props.images.map((image, i) => {
      return (
        <SwiperSlide
          style={{
            color: "black",
            height: "100vh",
            width: "100%",
            objectFit: "fill",
          }}
        >
          <img
            src={image}
            alt={`test-${i}`}
            style={{
              height: "100%",
              margin: "auto",
              //   width: "100%",
              //   objectFit: "fill",
            }}
          />
        </SwiperSlide>
      );
    });

  return (
    <>
      <Swiper
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className={styles.mySwiper}
        style={{
          backgroundColor: "white",
          color: "black",
          width: "100%",
        }}
      >
        {slides()}
      </Swiper>
    </>
  );
}
