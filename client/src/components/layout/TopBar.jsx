import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";


function TopBar() {
    return (
        <div className="bg-gray-200 shadow">
            <div className="flex justify-between items-center py-2 px-4">
                <div className="flex gap-4">
                    <div className="flex gap-1 items-center">
                        <FiPhone className="text-lg"/>
                        <span className="text-sm">+91 1234567890</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <HiOutlineMail className="text-lg"/>
                        <span className="text-sm">KallesClone@learning.com</span>
                    </div>
                </div>
                    
                <div>
                    <p className="text-sm">
                        Summer sale discount off <span className="text-pink-500">50%</span>! Shop Now
                    </p>
                </div>

                <div className="flex gap-4">
                    <button className="flex gap-1 items-center text-black hover:text-blue-500 transition-colors ease-in-out duration-500">
                        <CiLocationOn/>
                        Location
                    </button>
                    <button>USD</button>
                    <button>English</button>
                </div>
            </div>
            </div>
    )
}

export default TopBar