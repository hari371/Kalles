import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { blogs } from "../../constants/blogs"

function BlogSection() {
    return (
        <section className="section-margin">
            <div className="flex flex-col gap-0 items-center justify-center">
                <div className="flex gap-8 items-center justify-center">
                    <div className="border border-black w-20"></div>
                    <h3 className="text-3xl text-black font-bold uppercase">LATEST FROM BLOG</h3>               
                    <div className="border border-black w-20"></div>
                </div>
                <span className="text-gray-400 text-sm">The freshest and most exciting news</span>
            </div>
            <Swiper className="mb-24 w-[90%] md:w-[85%] xl:w-[80%] mt-10" 
                loop={true} modules={[Autoplay]} 
                pagination={{ clickable: true }}
                spaceBetween={30}
                autoplay={{
                    delay: 100000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                >
                
                {blogs.map((blog) => (
                    <SwiperSlide>
                        <div className="flex flex-col gap-4">
                            <div className="image-hover-zoom">
                                <img
                                    src={blog.image} alt={blog.title}
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-medium text-xl">{blog.title}</h3>
                                <span className="text-sm">
                                    <span className="text-gray-500">By</span> {blog.author} <span className="text-gray-500">on</span> {blog.date}
                                </span>
                                <p className="text-sm text-gray-500">
                                    Typography is the work of typesetters, compositors,
                                    typographers, graphic designers, art directors,
                                    manga artists, comic book artists, graffiti artists,
                                    and anyone who arranges words, letters, numbers,
                                    and symbols for publication, display, or distribution.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default BlogSection