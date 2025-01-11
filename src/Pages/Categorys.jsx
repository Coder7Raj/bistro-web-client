import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import slide1 from "../../src/assets/home/slide1.jpg";
import slide2 from "../../src/assets/home/slide2.jpg";
import slide3 from "../../src/assets/home/slide3.jpg";
import slide4 from "../../src/assets/home/slide4.jpg";
import slide5 from "../../src/assets/home/slide5.jpg";
import SectionTitle from "../Components/SectionTitle";

export default function Categorys() {
  return (
    <section>
      <SectionTitle
        heading={"order now"}
        subHeading={"From 11.00 am TO 10.00 pm"}
      ></SectionTitle>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[300px] w-[300px]" src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px] w-[300px]" src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px] w-[300px]" src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px] w-[300px]" src={slide4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px] w-[300px]" src={slide5} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
