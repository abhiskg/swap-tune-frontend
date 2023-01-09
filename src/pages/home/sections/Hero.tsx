import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <Swiper
      effect="coverflow"
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="relative "
    >
      <SwiperSlide className=" relative after-content">
        <img
          className="w-full md:h-[32rem] object-cover"
          src="https://images.pexels.com/photos/237464/pexels-photo-237464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className=" relative after-content">
        <img
          className="w-full md:h-[32rem] object-cover"
          src="https://images.unsplash.com/photo-1626577822073-e6d466df2fab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className=" relative after-content">
        <img
          className="w-full md:h-[32rem] object-cover"
          src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </SwiperSlide>
      <div className="absolute z-20  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  text-white">
        <span className="text-center flex flex-col justify-center items-center text-2xl md:text-4xl lg:text-5xl font-bold leading-none ">
          Swap your old music items with great deals
        </span>
        <p className=" mt-2 max-w-2xl mx-auto text-lg text-center hidden md:block">
          Swap Tune is a re commerce platform where you can sell and buy reused
          product at affordable rate
        </p>
      </div>
    </Swiper>
  );
};

export default Hero;
