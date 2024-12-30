import HeroSection from "../components/HeroSection";
import CountryFlagsSection from "../components/PopularCountries";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <CountryFlagsSection />
    </div>
  );
};

export default Home;
