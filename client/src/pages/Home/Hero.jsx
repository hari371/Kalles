import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import heroSlide1 from "../../assets/home/hero/KallesHeroSlide1.webp";
import heroSlide2 from "../../assets/home/hero/KallesHeroSlide2.webp";
import heroSlide3 from "../../assets/home/hero/KallesHeroSlide3.webp";

function Hero() {
  // HMR test comment
  return (
    <div>
      <h1>jaye</h1>
      <Swiper slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} 
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <img className="z-0 object-center object-cover w-full h-150"
              src={heroSlide1} alt="heroSlide1" />
              <div className="absolute flex flex-col items-start h-full w-full gap-8 top-1/2 -translate-y-1/2 left-1/4">
                <h5 className="text-3xl font-semibold">SUMMER 2025</h5>
                <h2 className="text-5xl font-bold">New Arrival Collection</h2>
                <button className="text-white bg-black hover:bg-blue-500 transition-colors ease-in-out duration-500 px-6 py-2 rounded-full">
                  Explore Now
                </button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className="z-0 object-center object-cover w-full h-150"
              src={heroSlide2} alt="heroSlide1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className="z-0 object-center object-cover w-full h-150"
              src={heroSlide3} alt="heroSlide1" />
          </div>
        </SwiperSlide>
      </Swiper> 
    </div>         
  )
}

export default Hero