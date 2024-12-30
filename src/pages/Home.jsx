import HeroSection from "../components/HeroSection";
import CountryFlagsSection from "../components/PopularCountries";
import WhyUseUs from "../components/WhyUseUs";
import HowItSolsimWorks from "../components/HowItWorks";

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
