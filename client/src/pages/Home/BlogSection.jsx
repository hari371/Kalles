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
        </section>
    )
}

export default BlogSection