import * as _ from "react";
import Hero from "../components/Hero.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import FeaturedMenu from "../components/FeaturedMenu.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import PopularCategories from "../components/PopularCategories.jsx";
import ReviewsPreview from "../components/ReviewsPreview.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
function Home() {
  return (
    usePageTitle("Home"),
    (
      <div>
        <Hero />
        <AboutPreview />
        <FeaturedMenu />
        <WhyChooseUs />
        <PopularCategories />
        <ReviewsPreview />
      </div>
    )
  );
}
export default Home;
