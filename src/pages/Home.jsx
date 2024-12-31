import HeroSection from "../components/Home/HeroSection";
import CountryFlagsSection from "../components/Home/PopularCountries";
import WhyUseUs from "../components/Home/WhyUseUs";
import HowItSolsimWorks from "../components/Home/HowItWorks";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <CountryFlagsSection />
      <WhyUseUs />
      <HowItSolsimWorks />
    </div>
  );
};

export default Home;
