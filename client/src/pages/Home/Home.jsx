import Hero from "./Hero";
import Categories from "./Categories";
import TrendingProducts from "./TrendingProducts";
import PromotionalBanner from "./PromotionalBanner";
import FeaturedProducts from "./FeaturedProducts";
import BlogSection from "./BlogSection";
import Instagram from "./Instagram";
import Services from "./Services";

function Home() {
  return (
    <>
      <Hero/>
      <Categories/>
      <TrendingProducts/>
      <PromotionalBanner/>
      <FeaturedProducts/>
      <BlogSection/>
      <Instagram/>
      <Services/>
    </>
  );
}

export default Home;