import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Hero from "../components/Hero/Hero";
import HomeCategories from "../components/HomeCategories/HomeCategories";
import HomeBannerSection1 from '../components/HomeBannerSection1/HomeBannerSection1'
import HomeProducts from '../components/HomeProducts/HomeProducts'

import Footer from '../components/Footer/Footer'
import DiscoverMoreSlider from "../components/sliders/DiscoverMoreSlider";
import SectionSliderCategories from "../components/sliders/SectionSliderCategories/SectionSliderCategories";

export default function Home() {

  return (
    <main className="flex w-full  min-h-screen flex-col items-center ">
      <div className="sticky top-0 z-50 w-full">
        {/* <Navbar /> */}
      </div>

      <div className="w-full h-full space-y-10 container">
        <Hero />
        <SectionSliderCategories />
        <DiscoverMoreSlider />
        <HomeCategories />
        <HomeBannerSection1 />
        <HomeProducts />
      </div>
      <Footer />
    </main>
  );
}
