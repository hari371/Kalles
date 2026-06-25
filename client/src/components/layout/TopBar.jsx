import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import { currencies } from "../../constants/currencies";
import { IoChevronDown } from "react-icons/io5";
import { languages } from "../../constants/languages";
import { Link } from "react-router-dom";
 
function TopBar() {
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    return (
        <div className="bg-gray-200 shadow">
            <div className="flex justify-between items-center py-2 px-4">
                <div className="flex gap-4">
                    <div className="flex gap-1 items-center">
                        <FiPhone className="text-lg"/>
                        <span className="text-sm cursor-pointer">+91 1234567890</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <HiOutlineMail className="text-lg"/>
                        <span className="text-sm cursor-pointer">KallesClone@learning.com</span>
                    </div>
                </div>
                    
                <div>
                    <Link to="/shop" className="text-sm cursor-pointer">
                        Summer sale discount off <span className="text-pink-500">50%</span>! Shop Now
                    </Link>
                </div>

                <div className="flex gap-4">
                    <button className="flex gap-1 items-center text-black hover:text-blue-500 transition-colors ease-in-out duration-500 cursor-pointer">
                        <CiLocationOn/>
                        Location
                    </button>
                    <div className="relative">
                        <button className="flex gap-2 items-center hover:text-blue-500 transition-colors ease-in-out duration-500 cursor-pointer"
                            onClick={() =>
                            setIsCurrencyOpen(!isCurrencyOpen)
                            }
                        >
                            <span><img src={selectedCurrency.flag} alt={selectedCurrency.country} className="w-5"/></span> <span>{selectedCurrency.code}</span>
                            <IoChevronDown className={`transition-transform duration-300 ${
                                isCurrencyOpen ? "rotate-180" : ""
                            }`}/>
                        </button>

                        <div className={`absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md min-w-60 py-4 z-50 transition-all duration-300 ${
                            isCurrencyOpen
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 translate-y-2 invisible"
                        }`}>
                            <ul className="flex flex-col gap-2 justify-center">
                                {currencies.map((currency) => (                                       
                                    <li key={currency.country}
                                    className={`transition-colors duration-500 ease-in-out ${
                                        currency.country === selectedCurrency.country ? "text-blue-500" : "text-black hover:text-blue-300"
                                    }`}>
                                        <button className="flex items-center gap-1 text-sm px-4 pt-1" 
                                        onClick={() => {
                                            setSelectedCurrency(currency); 
                                            setIsCurrencyOpen(false);
                                        }}>
                                            <span><img src={currency.flag} alt={currency.country} className="w-5"/></span>
                                            <span>{currency.code}</span>
                                            <span>{currency.symbol}</span>
                                            <span>{currency.country}</span>
                                        </button>
                                    </li>                                      
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative">
                        <button className="flex gap-2 items-center hover:text-blue-500 transition-colors ease-in-out duration-500 cursor-pointer"
                            onClick={() =>
                            setIsLanguageOpen(!isLanguageOpen)
                            }
                        >
                            <span>{selectedLanguage}</span>
                            <IoChevronDown className={`transition-transform duration-300 ${
                                isLanguageOpen ? "rotate-180" : ""
                            }`}/>
                        </button>

                        <div className={`absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md min-w-60 py-4 z-50 transition-all duration-300 ${
                            isLanguageOpen
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 translate-y-2 invisible"
                        }`}>
                            <ul className="flex flex-col gap-2 justify-center">
                                {languages.map((language) => (                                       
                                    <li key={language}
                                    className={`transition-colors duration-500 ease-in-out ${
                                        language === selectedLanguage ? "text-blue-500" : "text-black hover:text-blue-300"
                                    }`}>
                                        <button className="flex items-center gap-1 text-sm px-4 pt-1" 
                                        onClick={() => {
                                            setSelectedLanguage(language); 
                                            setIsLanguageOpen(false);
                                        }}>
                                            <span>{language}</span>
                                        </button>
                                    </li>                                      
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default TopBar