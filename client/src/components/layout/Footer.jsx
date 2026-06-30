import logo from "../../constants/logo";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

function Footer() {
    return (
        <footer >
            <div className="mt-16 pt-16 pb-12 bg-gray-100">
                <div className="grid grid-cols-7 w-[90%] md:w-[85%] lg:w-[80%] mx-auto gap-6">
                    <ul className="text-gray-500 flex flex-col gap-4 col-span-2">
                        <li className="">
                            <img src={logo} alt="" />
                        </li>
                        <li className="flex gap-4 items-center mt-6 hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <CiLocationOn className="text-3xl"/>
                            <span>184 Main Rd E, St Albans VIC 3021, Australia</span>
                        </li>
                        <li className="flex gap-4 items-center hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <MdOutlineEmail className="text-3xl"/>
                            <span>contact@company.com</span>
                        </li>
                        <li className="flex gap-4 items-center hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <FiPhone className="text-3xl"/>
                            <span>+001 2233 456</span>
                        </li>
                    </ul>
                    
                    <ul className="text-gray-500 flex flex-col gap-4">
                        <li className="text-black text-lg font-medium">
                            <span>Categories</span>
                        </li>
                        <li className="mt-6 hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>Men</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>Women</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>Accessories</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>Shoes</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>Watch</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>Dress</span>
                        </li>
                    </ul>
                    <ul className="text-gray-500 flex flex-col gap-4">
                        <li className="text-black text-lg font-medium">
                            <span>Information</span>
                        </li>
                        <li className="mt-6 hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>About us</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>Contact us</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>Store Location</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>Blog</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>FAQ</span>
                        </li>
                    </ul>
                    <ul className="text-gray-500 flex flex-col gap-4">
                        <li className="text-black text-lg font-medium">
                            <span>Useful links</span>
                        </li>
                        <li className="mt-6 hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>Latest News</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>My Account</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>Size Guide</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>FAQs</span>
                        </li>
                        <li className="hover:text-blue-500 transition-colors duration-500 ease-in-out">
                            <span>FAQs 2</span>
                        </li>
                    </ul>
                    <ul className="text-gray-500 flex flex-col gap-4 col-span-2">
                        <li className="text-black text-lg font-medium">
                            <span>Newsletter Signup</span>
                        </li>
                        <li className="mt-6 ">
                            <span>Subscribe to our newsletter and get 10% off your first purchase</span>
                        </li>
                        <li>
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full border border-gray-300 rounded-full py-3 pl-5 pr-28 focus:outline-none"
                                />

                                <button
                                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between w-[90%] md:w-[85%] lg:w-[80%] mx-auto my-4">
                <div>
                    <p className="text-gray-500">All Rights Reserved © 2025 <span className="text-blue-500">Kalles</span> - Developed by <span className="text-black">Himanshu</span></p>
                </div>
                <ul className="flex  gap-4">
                    <li className="text-gray-500 hover:text-blue-500 transition-colors duration-500 ease-in-out">
                        <span>Shop</span>
                    </li>
                    <li className="text-gray-500 hover:text-blue-500 transition-colors duration-500 ease-in-out">
                        <span>Contact us</span>
                    </li>
                    <li className="text-gray-500 hover:text-blue-500 transition-colors duration-500 ease-in-out">
                        <span>About us</span>
                    </li>
                    <li className="text-gray-500 hover:text-blue-500 transition-colors duration-500 ease-in-out">
                        <span>Blog</span>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer