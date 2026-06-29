import Hero from "./Hero";
import Categories from "./Categories";
import TrendingProducts from "./TrendingProducts";
import PromotionalBanner from "./PromotionalBanner";
import FeaturedProducts from "./FeaturedProducts";
import BlogSection from "./BlogSection";

function Home() {
  return (
    <>
      <Hero/>
      <Categories/>
      <TrendingProducts/>
      <PromotionalBanner/>
      <FeaturedProducts/>
      <BlogSection/>
    </>
  );
}

export default Home;