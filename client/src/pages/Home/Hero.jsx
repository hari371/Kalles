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
    <Swiper className="mb-24" slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} 
      pagination={{ clickable: true }}
      autoplay={{
        delay: 100000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="relative">
          <img className="z-0 object-center object-cover w-full h-100 md:h-120 lg:h-150"
            src={heroSlide1} alt="heroSlide1" />
            <div className="absolute inset-0 flex flex-col h-full w-full items-start justify-center gap-4 pl-12 md:pl-20 lg:pl-32 xl:pl-40">
              <h5 className="text-lg lg:text-xl font-medium uppercase">SUMMER 2025</h5>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold capitalize">New Arrival Collection</h2>
              <button className="text-white bg-black hover:bg-blue-500 transition-colors ease-in-out duration-500 px-4 md:px-6 py-2 rounded-full">
                Explore Now
              </button>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img className="z-0 object-center object-cover w-full h-100 md:h-120 lg:h-150"
            src={heroSlide2} alt="heroSlide1" />
            <div className="absolute inset-0 flex flex-col h-full w-full items-end justify-center gap-4 pr-12 md:pr-20 lg:pr-32 xl:pr-40">
              <h5 className="text-lg lg:text-xl font-medium uppercase">new season</h5>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold capitalize">lookbook collection</h2>
              <button className="text-white bg-black hover:bg-blue-500 transition-colors ease-in-out duration-500 px-4 md:px-6 py-2 rounded-full">
                Explore Now
              </button>
            </div>
        </div>
      </SwiperSlide> 
      <SwiperSlide>
        <div className="relative">
          <img className="z-0 object-center object-cover w-full h-100 md:h-120 lg:h-150"
            src={heroSlide3} alt="heroSlide1" />
            <div className="absolute inset-0 flex flex-col h-full w-full items-start justify-center gap-4 pl-12 md:pl-20 lg:pl-32 xl:pl-40">
              <h5 className="text-lg lg:text-xl font-medium uppercase">SUMMER sale</h5>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold capitalize">save upto 70%</h2>
              <button className="text-white bg-black hover:bg-blue-500 transition-colors ease-in-out duration-500 px-4 md:px-6 py-2 rounded-full">
                Explore Now
              </button>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>       
  )
}

export default Hero