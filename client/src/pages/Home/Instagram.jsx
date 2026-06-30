import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { instagramPosts } from "../../constants/instagramPosts";

function Instagram() {
    return (
        <section className="section-margin">
            <div className="flex gap-8 items-center justify-center">
                <div className="border border-black w-20"></div>
                <h3 className="text-3xl text-black font-bold uppercase">@ FOLLOW US ON INSTAGRAM</h3>               
                <div className="border border-black w-20"></div>
            </div>
            <Swiper className="mb-24 mt-10" 
                loop={true} modules={[Autoplay]} 
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 100000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    1280: {
                        slidesPerView: 6,
                    },
                }}
                >
                {instagramPosts.map((post) => (
                    <SwiperSlide key={post.id}>
                        <div className="image-hover-zoom">
                            <img src={post.image} alt={post.id} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Instagram