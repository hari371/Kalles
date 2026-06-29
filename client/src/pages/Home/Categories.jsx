import category1 from "../../assets/home/categories/category-1.webp";
import category2 from "../../assets/home/categories/category-2.webp";
import category3 from "../../assets/home/categories/category-3.webp";
import category4 from "../../assets/home/categories/category-4.webp";

function Categories() {
    return (
        <section className="section-margin">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] md:w-[85%] xl:w-[70%] gap-6 md:gap-8 mx-auto">
                <div className="relative image-hover-zoom col-span-2 h-150 w-full order-1">
                    <img src={category1} className="object-center object-cover h-full w-full" alt="" />
                    <div className="absolute inset-0 flex items-end justify-center pb-6">
                        <span className="bg-white px-10 py-2 text-xl font-semibold">woman</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col gap-4 h-150 w-full col-span-1 md:col-span-3 lg:col-span-1 order-2 md:order-3 lg:order-2">
                    <div className="relative image-hover-zoom h-1/2 w-full">
                        <img src={category2} className=" object-cover h-full w-full" alt="" />
                        <div className="absolute inset-0 flex items-end justify-center pb-6">
                            <span className="bg-white px-10 py-2 text-xl font-semibold">Accessories</span>
                        </div>
                    </div>
                    <div className="relative image-hover-zoom h-1/2 w-full">
                        <img src={category4} className="object-center object-cover h-full w-full" alt="" />
                        <div className="absolute inset-0 flex items-end justify-center pb-6">
                            <span className="bg-white px-10 py-2 text-xl font-semibold">Footwear</span>
                        </div>
                    </div>
                </div>
                <div className="relative self-start image-hover-zoom h-150 w-full order-3 md:order-2 lg:order-3">
                    <img src={category3} className="object-center object-cover h-full w-full" alt="" />
                    <div className="absolute inset-0 flex items-end justify-center pb-6">
                        <span className="bg-white px-10 py-2 text-xl font-semibold">Watches</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories