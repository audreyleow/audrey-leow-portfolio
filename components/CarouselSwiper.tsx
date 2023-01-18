import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";

import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./carousel.module.css";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function CarouselSwiper(props: { images: string[] }) {
  return (
    <Swiper
      style={
        {
          "--swiper-navigation-color": "#000000",
          "--swiper-pagination-color": "#ffffff",
          height: 600,
        } as any
      }
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {props.images.map((image, i) => (
        <SwiperSlide key={image}>
          <Image
            style={{
              objectFit: "contain",
            }}
            src={image}
            alt={`image-${i}`}
            fill
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
