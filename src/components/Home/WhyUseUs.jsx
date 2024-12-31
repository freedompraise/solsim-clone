const WhyUseUs = () => {
  const cards = [
    {
      title:
        "Over 500,000 Numbers originating from around 180 Countries online",
      content:
        "Here you can find virtual numbers from more than 180 countries. You can find phone numbers originating from pretty much anywhere, including the UK, Russia, Sweden, Germany, Spain, India, France etc.",
    },
    {
      title: "New Virtual Numbers Added Daily",
      content:
        "Receive unlimited verification codes for any website or app of your choice. Here, the pricing starts at one ruble for a single number, and you will not have to pay for monthly SIM plans too.",
    },
    {
      title: "Single-Use numbers and multiple SMS deliveries",
      content:
        "Receive unlimited verification codes for any website or app of your choice. Here, the pricing starts at one ruble for a single number, and you will not have to pay for monthly SIM plans too.",
    },
  ];

  return (
    <div className="py-16 bg-[#F9F9FF]">
      <h2 className="text-center font-inter text-3xl font-bold mb-8">
        Why use us?
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white py-16 border border-[#E3E8F2] rounded-lg px-8 shadow-sm text-left"
          >
            <h3 className="text-2xl pr-16 font-semibold text-[#1A1A1A] mb-4">
              {card.title}
            </h3>
            <p className="text-[#5A5A5A]">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUseUs;
