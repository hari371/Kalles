import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

function TrendingProducts() {
    return (
        <section className="section-margin">
            <div className="flex flex-col gap-0 items-center justify-center">
                <div className="flex gap-8 items-center justify-center">
                    <div className="border border-black w-20"></div>
                    <h3 className="text-3xl text-black font-bold uppercase">trending</h3>               
                    <div className="border border-black w-20"></div>
                </div>
                <span className="text-gray-400 text-sm">Top view in this week</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] md:w-[85%] xl:w-[75%] gap-6 md:gap-8 mx-auto mt-10">
                <div className="flex flex-col gap-2">
                    <div className="relative group z-20">
                        <img className="w-full transition-opacity duration-500 group-hover:opacity-0"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q1_2-0_4e036e1e-79fe-4129-958e-9a1a2698ce6a.jpg?v=1717404543&width=360" alt="" />
                        <img className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q3_2-0_d06f4236-5147-48d3-83dd-13a55d4f57f7.jpg?v=1717404543&width=533" alt="" />   
                        <div className="absolute inset-0 flex flex-col justify-between z-50 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <div className="-translate-x-4 group-hover:translate-x-4 transition-transform duration-500 ease-in-out pt-4">
                                <FaRegHeart className="text-white text-xl hover:text-black hover:text-2xl transition-all duration-500 ease-in-out"/>
                            </div>
                            <div className="flex flex-col gap-2 items-center text-center justify-center">
                                <button className="group/btn1 relative overflow-hidden bg-white text-black hover:bg-black hover:text-white px-6 py-2 rounded-full w-40 h-12 transition-colors duration-500 ease-in-out">
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:-translate-y-6 group-hover/btn1:opacity-0">
                                        Quick View
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:translate-y-0 group-hover/btn1:opacity-100">
                                        <MdOutlineRemoveRedEye className="text-xl" />
                                    </span>
                                </button>
                                <button className="group/btn2 relative overflow-hidden bg-blue-400 text-white w-40 h-12 px-6 py-2 rounded-full">                          
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:-translate-y-6 group-hover/btn2:opacity-0">
                                        Quick Add
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:translate-y-0 group-hover/btn2:opacity-100">
                                        <IoCartOutline className="text-xl" />
                                    </span>
                                </button>
                            </div>
                            <div className="pl-4 pb-2">
                                <span className="text-sm text-white">XL, L, M, S</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start">
                        <h5 className="font-medium">Product Name</h5>
                        <span className="text-gray-400 text-sm">Product Price</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative group z-20">
                        <img className="w-full transition-opacity duration-500 group-hover:opacity-0"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q1_2-0_4e036e1e-79fe-4129-958e-9a1a2698ce6a.jpg?v=1717404543&width=360" alt="" />
                        <img className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q3_2-0_d06f4236-5147-48d3-83dd-13a55d4f57f7.jpg?v=1717404543&width=533" alt="" />   
                        <div className="absolute inset-0 flex flex-col justify-between z-50 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <div className="-translate-x-4 group-hover:translate-x-4 transition-transform duration-500 ease-in-out pt-4">
                                <FaRegHeart className="text-white text-xl hover:text-black hover:text-2xl transition-all duration-500 ease-in-out"/>
                            </div>
                            <div className="flex flex-col gap-2 items-center text-center justify-center">
                                <button className="group/btn1 relative overflow-hidden bg-white text-black hover:bg-black hover:text-white px-6 py-2 rounded-full w-40 h-12 transition-colors duration-500 ease-in-out">
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:-translate-y-6 group-hover/btn1:opacity-0">
                                        Quick View
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:translate-y-0 group-hover/btn1:opacity-100">
                                        <MdOutlineRemoveRedEye className="text-xl" />
                                    </span>
                                </button>
                                <button className="group/btn2 relative overflow-hidden bg-blue-400 text-white w-40 h-12 px-6 py-2 rounded-full">                          
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:-translate-y-6 group-hover/btn2:opacity-0">
                                        Quick Add
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:translate-y-0 group-hover/btn2:opacity-100">
                                        <IoCartOutline className="text-xl" />
                                    </span>
                                </button>
                            </div>
                            <div className="pl-4 pb-2">
                                <span className="text-sm text-white">XL, L, M, S</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start">
                        <h5 className="font-medium">Product Name</h5>
                        <span className="text-gray-400 text-sm">Product Price</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative group z-20">
                        <img className="w-full transition-opacity duration-500 group-hover:opacity-0"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q1_2-0_4e036e1e-79fe-4129-958e-9a1a2698ce6a.jpg?v=1717404543&width=360" alt="" />
                        <img className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q3_2-0_d06f4236-5147-48d3-83dd-13a55d4f57f7.jpg?v=1717404543&width=533" alt="" />   
                        <div className="absolute inset-0 flex flex-col justify-between z-50 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <div className="-translate-x-4 group-hover:translate-x-4 transition-transform duration-500 ease-in-out pt-4">
                                <FaRegHeart className="text-white text-xl hover:text-black hover:text-2xl transition-all duration-500 ease-in-out"/>
                            </div>
                            <div className="flex flex-col gap-2 items-center text-center justify-center">
                                <button className="group/btn1 relative overflow-hidden bg-white text-black hover:bg-black hover:text-white px-6 py-2 rounded-full w-40 h-12 transition-colors duration-500 ease-in-out">
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:-translate-y-6 group-hover/btn1:opacity-0">
                                        Quick View
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:translate-y-0 group-hover/btn1:opacity-100">
                                        <MdOutlineRemoveRedEye className="text-xl" />
                                    </span>
                                </button>
                                <button className="group/btn2 relative overflow-hidden bg-blue-400 text-white w-40 h-12 px-6 py-2 rounded-full">                          
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:-translate-y-6 group-hover/btn2:opacity-0">
                                        Quick Add
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:translate-y-0 group-hover/btn2:opacity-100">
                                        <IoCartOutline className="text-xl" />
                                    </span>
                                </button>
                            </div>
                            <div className="pl-4 pb-2">
                                <span className="text-sm text-white">XL, L, M, S</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start">
                        <h5 className="font-medium">Product Name</h5>
                        <span className="text-gray-400 text-sm">Product Price</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative group z-20">
                        <img className="w-full transition-opacity duration-500 group-hover:opacity-0"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q1_2-0_4e036e1e-79fe-4129-958e-9a1a2698ce6a.jpg?v=1717404543&width=360" alt="" />
                        <img className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q3_2-0_d06f4236-5147-48d3-83dd-13a55d4f57f7.jpg?v=1717404543&width=533" alt="" />   
                        <div className="absolute inset-0 flex flex-col justify-between z-50 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <div className="-translate-x-4 group-hover:translate-x-4 transition-transform duration-500 ease-in-out pt-4">
                                <FaRegHeart className="text-white text-xl hover:text-black hover:text-2xl transition-all duration-500 ease-in-out"/>
                            </div>
                            <div className="flex flex-col gap-2 items-center text-center justify-center">
                                <button className="group/btn1 relative overflow-hidden bg-white text-black hover:bg-black hover:text-white px-6 py-2 rounded-full w-40 h-12 transition-colors duration-500 ease-in-out">
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:-translate-y-6 group-hover/btn1:opacity-0">
                                        Quick View
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:translate-y-0 group-hover/btn1:opacity-100">
                                        <MdOutlineRemoveRedEye className="text-xl" />
                                    </span>
                                </button>
                                <button className="group/btn2 relative overflow-hidden bg-blue-400 text-white w-40 h-12 px-6 py-2 rounded-full">                          
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:-translate-y-6 group-hover/btn2:opacity-0">
                                        Quick Add
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:translate-y-0 group-hover/btn2:opacity-100">
                                        <IoCartOutline className="text-xl" />
                                    </span>
                                </button>
                            </div>
                            <div className="pl-4 pb-2">
                                <span className="text-sm text-white">XL, L, M, S</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start">
                        <h5 className="font-medium">Product Name</h5>
                        <span className="text-gray-400 text-sm">Product Price</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative group z-20">
                        <img className="w-full transition-opacity duration-500 group-hover:opacity-0"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q1_2-0_4e036e1e-79fe-4129-958e-9a1a2698ce6a.jpg?v=1717404543&width=360" alt="" />
                        <img className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q3_2-0_d06f4236-5147-48d3-83dd-13a55d4f57f7.jpg?v=1717404543&width=533" alt="" />   
                        <div className="absolute inset-0 flex flex-col justify-between z-50 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <div className="-translate-x-4 group-hover:translate-x-4 transition-transform duration-500 ease-in-out pt-4">
                                <FaRegHeart className="text-white text-xl hover:text-black hover:text-2xl transition-all duration-500 ease-in-out"/>
                            </div>
                            <div className="flex flex-col gap-2 items-center text-center justify-center">
                                <button className="group/btn1 relative overflow-hidden bg-white text-black hover:bg-black hover:text-white px-6 py-2 rounded-full w-40 h-12 transition-colors duration-500 ease-in-out">
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:-translate-y-6 group-hover/btn1:opacity-0">
                                        Quick View
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:translate-y-0 group-hover/btn1:opacity-100">
                                        <MdOutlineRemoveRedEye className="text-xl" />
                                    </span>
                                </button>
                                <button className="group/btn2 relative overflow-hidden bg-blue-400 text-white w-40 h-12 px-6 py-2 rounded-full">                          
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:-translate-y-6 group-hover/btn2:opacity-0">
                                        Quick Add
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:translate-y-0 group-hover/btn2:opacity-100">
                                        <IoCartOutline className="text-xl" />
                                    </span>
                                </button>
                            </div>
                            <div className="pl-4 pb-2">
                                <span className="text-sm text-white">XL, L, M, S</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start">
                        <h5 className="font-medium">Product Name</h5>
                        <span className="text-gray-400 text-sm">Product Price</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative group z-20">
                        <img className="w-full transition-opacity duration-500 group-hover:opacity-0"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q1_2-0_4e036e1e-79fe-4129-958e-9a1a2698ce6a.jpg?v=1717404543&width=360" alt="" />
                        <img className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q3_2-0_d06f4236-5147-48d3-83dd-13a55d4f57f7.jpg?v=1717404543&width=533" alt="" />   
                        <div className="absolute inset-0 flex flex-col justify-between z-50 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <div className="-translate-x-4 group-hover:translate-x-4 transition-transform duration-500 ease-in-out pt-4">
                                <FaRegHeart className="text-white text-xl hover:text-black hover:text-2xl transition-all duration-500 ease-in-out"/>
                            </div>
                            <div className="flex flex-col gap-2 items-center text-center justify-center">
                                <button className="group/btn1 relative overflow-hidden bg-white text-black hover:bg-black hover:text-white px-6 py-2 rounded-full w-40 h-12 transition-colors duration-500 ease-in-out">
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:-translate-y-6 group-hover/btn1:opacity-0">
                                        Quick View
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:translate-y-0 group-hover/btn1:opacity-100">
                                        <MdOutlineRemoveRedEye className="text-xl" />
                                    </span>
                                </button>
                                <button className="group/btn2 relative overflow-hidden bg-blue-400 text-white w-40 h-12 px-6 py-2 rounded-full">                          
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:-translate-y-6 group-hover/btn2:opacity-0">
                                        Quick Add
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:translate-y-0 group-hover/btn2:opacity-100">
                                        <IoCartOutline className="text-xl" />
                                    </span>
                                </button>
                            </div>
                            <div className="pl-4 pb-2">
                                <span className="text-sm text-white">XL, L, M, S</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start">
                        <h5 className="font-medium">Product Name</h5>
                        <span className="text-gray-400 text-sm">Product Price</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative group z-20">
                        <img className="w-full transition-opacity duration-500 group-hover:opacity-0"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q1_2-0_4e036e1e-79fe-4129-958e-9a1a2698ce6a.jpg?v=1717404543&width=360" alt="" />
                        <img className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q3_2-0_d06f4236-5147-48d3-83dd-13a55d4f57f7.jpg?v=1717404543&width=533" alt="" />   
                        <div className="absolute inset-0 flex flex-col justify-between z-50 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <div className="-translate-x-4 group-hover:translate-x-4 transition-transform duration-500 ease-in-out pt-4">
                                <FaRegHeart className="text-white text-xl hover:text-black hover:text-2xl transition-all duration-500 ease-in-out"/>
                            </div>
                            <div className="flex flex-col gap-2 items-center text-center justify-center">
                                <button className="group/btn1 relative overflow-hidden bg-white text-black hover:bg-black hover:text-white px-6 py-2 rounded-full w-40 h-12 transition-colors duration-500 ease-in-out">
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:-translate-y-6 group-hover/btn1:opacity-0">
                                        Quick View
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:translate-y-0 group-hover/btn1:opacity-100">
                                        <MdOutlineRemoveRedEye className="text-xl" />
                                    </span>
                                </button>
                                <button className="group/btn2 relative overflow-hidden bg-blue-400 text-white w-40 h-12 px-6 py-2 rounded-full">                          
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:-translate-y-6 group-hover/btn2:opacity-0">
                                        Quick Add
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:translate-y-0 group-hover/btn2:opacity-100">
                                        <IoCartOutline className="text-xl" />
                                    </span>
                                </button>
                            </div>
                            <div className="pl-4 pb-2">
                                <span className="text-sm text-white">XL, L, M, S</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start">
                        <h5 className="font-medium">Product Name</h5>
                        <span className="text-gray-400 text-sm">Product Price</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="relative group z-20">
                        <img className="w-full transition-opacity duration-500 group-hover:opacity-0"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q1_2-0_4e036e1e-79fe-4129-958e-9a1a2698ce6a.jpg?v=1717404543&width=360" alt="" />
                        <img className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            src="https://kalles-5.myshopify.com/cdn/shop/files/eberj4183019d5e_q3_2-0_d06f4236-5147-48d3-83dd-13a55d4f57f7.jpg?v=1717404543&width=533" alt="" />   
                        <div className="absolute inset-0 flex flex-col justify-between z-50 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <div className="-translate-x-4 group-hover:translate-x-4 transition-transform duration-500 ease-in-out pt-4">
                                <FaRegHeart className="text-white text-xl hover:text-black hover:text-2xl transition-all duration-500 ease-in-out"/>
                            </div>
                            <div className="flex flex-col gap-2 items-center text-center justify-center">
                                <button className="group/btn1 relative overflow-hidden bg-white text-black hover:bg-black hover:text-white px-6 py-2 rounded-full w-40 h-12 transition-colors duration-500 ease-in-out">
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:-translate-y-6 group-hover/btn1:opacity-0">
                                        Quick View
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn1:translate-y-0 group-hover/btn1:opacity-100">
                                        <MdOutlineRemoveRedEye className="text-xl" />
                                    </span>
                                </button>
                                <button className="group/btn2 relative overflow-hidden bg-blue-400 text-white w-40 h-12 px-6 py-2 rounded-full">                          
                                    <span className="absolute inset-0 flex items-center justify-center
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:-translate-y-6 group-hover/btn2:opacity-0">
                                        Quick Add
                                    </span>
                                    <span className="absolute inset-0 flex items-center justify-center
                                        translate-y-6 opacity-0
                                        transition-all duration-500 ease-in-out
                                        group-hover/btn2:translate-y-0 group-hover/btn2:opacity-100">
                                        <IoCartOutline className="text-xl" />
                                    </span>
                                </button>
                            </div>
                            <div className="pl-4 pb-2">
                                <span className="text-sm text-white">XL, L, M, S</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-0 items-start">
                        <h5 className="font-medium">Product Name</h5>
                        <span className="text-gray-400 text-sm">Product Price</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrendingProducts