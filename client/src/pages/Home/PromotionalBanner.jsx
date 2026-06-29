function PromotionalBanner() {
    return (
        <section className="section-margin ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-[90%] md:w-[85%] xl:w-[75%] mx-auto">
                <div className="relative group overflow-hidden">
                    <img className="object-cover object-center group-hover:scale-150 group-hover:rotate-15 transition-transform duration-700 ease-in-out" 
                        src="https://kalles-5.myshopify.com/cdn/shop/files/5_2022-03-02.jpg?v=1717725345&width=600" alt="" />
                    <div className="absolute inset-0 flex flex-col gap-2 justify-center items-center text-center text-white">
                        <h3 className="text-3xl font-medium uppercase">lookbook 2026</h3>
                        <span className="text-sm font-medium uppercase">make love this look</span>
                    </div>
                </div>
                <div className="relative group overflow-hidden">
                    <img className="scale-120 group-hover:-translate-y-4 transition-transform duration-700 ease-in-out" 
                        src="https://kalles-5.myshopify.com/cdn/shop/files/6_2022-03-02_50f70a60-cd60-4f21-a6c5-9cac17242994.jpg?v=1718351850&width=600" alt="" />
                    <div className="absolute inset-0 flex flex-col gap-2 justify-center items-center text-center text-white">
                        <span className="text-sm font-medium uppercase" >summer sale</span>
                        <h3 className="text-5xl font-bold uppercase">upto 70% off</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PromotionalBanner