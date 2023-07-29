import HomeHero from "../../components/Home/HeroSection/Hero";
import News from "../../components/Home/News/News";
import Region from "../../components/Home/Region/Region";
import PropertySteps from "../../components/Home/Steps/PropertySteps";
import TrendingHomes from "../../components/Home/TrendingHomes/TrendingHomes";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrendingHomes />
      <Region />
      <PropertySteps />
      <News />
    </>
  );
}
