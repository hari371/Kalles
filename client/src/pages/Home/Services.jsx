import { MdOutlineDirectionsCar } from "react-icons/md";
import { GrSupport } from "react-icons/gr";
import { RiRefund2Line } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";

function Services() {
    return (
        <section className="-mt-10 mb-16">
            <div className="flex gap-8 justify-center items-center w-[90%] md:w-[85%] xl:w-[80%] mx-auto">
                <div className="flex gap-4">
                    <MdOutlineDirectionsCar className="text-6xl text-gray-500"/>
                    <div className="flex flex-col gap-2">
                        <h5 className="text-black text-lg font-medium">FREE SHIPPING</h5>
                        <span className="text-gray-500 text-sm">Free shipping on all US orders or orders above $100</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <GrSupport className="text-6xl text-gray-500"/>
                    <div className="flex flex-col gap-2">
                        <h5 className="text-black text-lg font-medium">SUPPORT 24/7</h5>
                        <span className="text-gray-500 text-sm">Contact us 24 hours a day, 7 days a week</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <RiRefund2Line className="text-6xl text-gray-500"/>
                    <div className="flex flex-col gap-2">
                        <h5 className="text-black text-lg font-medium">30 DAYS RETURN</h5>
                        <span className="text-gray-500 text-sm">Simply return it within 30 days for an exchange.</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <RiSecurePaymentLine className="text-6xl text-gray-500"/>
                    <div className="flex flex-col gap-2">
                        <h5 className="text-black text-lg font-medium">100% PAYMENT SECURE</h5>
                        <span className="text-gray-500 text-sm">We ensure secure payment with PEV</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services