const CountryFlagsSection = () => {
  const flags = [
    { country: "USA", code: "US" },
    { country: "Canada", code: "CA" },
    { country: "UK", code: "GB" },
    { country: "Germany", code: "DE" },
    { country: "France", code: "FR" },
    { country: "Australia", code: "AU" },
    { country: "India", code: "IN" },
    { country: "Nigeria", code: "NG" },
    { country: "Brazil", code: "BR" },
    { country: "China", code: "CN" },
    { country: "Japan", code: "JP" },
    { country: "South Korea", code: "KR" },
  ];

  return (
    <div className="container px-4 mx-auto my-16">
      <h2 className="text-3xl font-inter font-bold leading-[32px] text-center mb-4">
        Popular Countries
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {flags.map((flag, index) => (
          <div
            key={index}
            className="grid grid-cols-2 items-center justify-center w-full h-[96px] bg-white rounded-lg shadow-md p-4 border border-[#E5E7EB]"
          >
            <img
              src={`https://flagsapi.com/${flag.code}/flat/64.png`}
              alt={`${flag.country} flag`}
              className="w-[64px] h-[64px] object-contain mb-2"
            />
            <span className="hidden lg:block text-gray-600 text-2xl font-bold">
              {flag.country}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryFlagsSection;
