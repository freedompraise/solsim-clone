import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[400px] lg:h-[500px] sm:h-[300px] flex items-center w-full"
      style={{ backgroundImage: "url('src/assets/globe.jpg')" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-full px-8 sm:px-4">
        <h3 className="font-inter font-bold lg:text-2xl text-center lg:mt-32 sm:mt-16 lg:w-1/2 sm:w-full">
          Top up prepaid mobile phones with Solana and other cryptocurrencies
          from anywhere in the world
        </h3>
        <div className="flex flex-col items-center space-y-2 mt-6 lg:w-1/2 sm:w-full">
          <label
            htmlFor="phone"
            className="font-inter font-bold text-[16px] sm:text-[14px] leading-[22px] ml-2"
          >
            Enter phone number
          </label>
          <div className="flex items-center space-x-0">
            <select
              className="bg-white text-[#001027] font-inter font-bold text-[16px] sm:text-[14px] leading-[22px] py-[12px] px-[16px] sm:px-[8px] rounded-[4px] focus:outline-none w-[120px] sm:w-[80px]"
              defaultValue="US"
            >
              <option value="US">+1</option>
              <option value="CA">+1</option>
              <option value="GB">+44</option>
              <option value="AU">+61</option>
              <option value="IN">+91</option>
              <option value="DE">+49</option>
              <option value="FR">+33</option>
            </select>
            <input
              type="text"
              placeholder="(201) 555-1234"
              className="bg-white text-[#001027] font-inter font-bold text-[16px] sm:text-[14px] leading-[22px] py-[12px] px-[16px] sm:px-[8px] rounded-[4px] w-full focus:outline-none"
            />
            <button className="bg-[#CC3DFF] text-white font-inter font-bold text-[16px] sm:text-[14px] leading-[22px] py-[12px] px-[24px] sm:px-[8px] rounded-[4px] focus:outline-none">
              <FontAwesomeIcon icon={faGreaterThan} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
