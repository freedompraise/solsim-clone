const HowItSolsimWorks = () => {
  const steps = [
    {
      title: "Get started with SOLSIM",
      content:
        "Make sure your phone is compatible. Once you’ve verified this, simply look for your travel destination and purchase the data plan.",
    },
    {
      title: "Pay with your preferred coin and wallet",
      content:
        "Pay with Bitcoin (on-chain and Lightning), Solana Ethereum, Binance Pay, Tether, Litecoin and more.",
    },
    {
      title: "Install the eSIM and activate your plan",
      content:
        "Go through the instructions to complete the installation process and activate your SOLSIM. Now you can enjoy browsing the web. It’s just that easy!",
    },
  ];

  return (
    <div className="py-16 bg-[#F9F9FF]">
      <h2 className="text-center text-[40px] font-medium text-[#001027] mb-8">
        How it SOLSIM works
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#E9D7FF] rounded-lg p-6 text-left shadow-md"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#CC3DFF] text-white rounded-full mb-4"></div>
            <h3 className="text-xl pr-8 font-semibold text-[#001027] mb-4">
              {step.title}
            </h3>
            <p className="text-[#001027]">{step.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItSolsimWorks;
