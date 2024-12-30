const HeroSection = () => {
  return (
    <div className="relative w-full h-[466px] bg-gradient-to-r from-[#EEBEFF] to-[#ADA6FF] rounded-b-[100px] mt-[90px]">
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        <h3 className="text-white font-inter font-bold text-[24px] leading-[29px] text-center">
          Top up prepaid mobile phones with Solana and other cryptocurrencies
          from anywhere in the world
        </h3>
        <div className="flex items-center space-x-4 mt-4">
          <label
            htmlFor="phone"
            className="text-white font-inter font-bold text-[16px] leading-[22px]"
          >
            Enter phone number
          </label>
          <input
            type="text"
            placeholder="+123456789"
            className="bg-white text-[#001027] font-inter font-bold text-[16px] leading-[22px] py-[12px] px-[24px] rounded-[4px] w-[400px] focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
