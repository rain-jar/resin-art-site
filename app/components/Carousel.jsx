"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Carousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        pagination={{ clickable: true }}
        loop={true}
        className="h-[400px] md:h-[600px]"
      >
        {["Bowls.png","Coasters.png", "Table.png"].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={`/images/carousel/${img}`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover animate-zoomOut"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



  