"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "./slideshow.css";

interface Props {
  images: string[] | undefined;
  title: string;
  className?: string;
}

import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import Image from "next/image";
export const ProductMobileSlideShow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{ width: "100vw", height: "500px" }}
        pagination
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Navigation, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images?.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={600}
              height={500}
              className=" object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
