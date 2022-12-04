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
      className="relative"
    >
      <SwiperSlide>
        <img
          className="w-full md:h-[32rem] object-cover"
          src="https://images.pexels.com/photos/2876659/pexels-photo-2876659.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full md:h-[32rem] object-cover"
          src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWMlMjBpbnN0cnVtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full md:h-[32rem] object-cover"
          src="https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBpbnN0cnVtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </SwiperSlide>
      <div className="absolute  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 text-white">
        <span className="text-center flex flex-col justify-center items-center text-xl md:text-4xl lg:text-5xl font-bold leading-none ">
          Swap your music items with great price
        </span>
        <p className=" mt-2 text-lg text-center hidden md:block">
          Swap Tune is a re commerce platform where you can sell and buy reused
          product at affordable rate
        </p>
      </div>
    </Swiper>
  );
};

export default Hero;
