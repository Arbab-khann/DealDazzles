import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { Navigation, Pagination, A11y } from "swiper/modules";
function Homeslider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            style={{
              width: "97.7%",
              height: "15rem",
              margin: "1rem",
              borderRadius: "5px",
            }}
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/42e1272ed0854e8e.jpeg?q=20"
            alt="pic"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "15rem" }}
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/623693f65ed8766f.jpg?q=20"
            alt="pic"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "15rem" }}
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f7b7d27605cca646.jpg?q=20"
            alt="pic"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "15rem" }}
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b31a526431a68267.jpg?q=20"
            alt="pic"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "15rem" }}
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/785781fd1237d832.jpeg?q=20"
            alt="pic"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Homeslider;
