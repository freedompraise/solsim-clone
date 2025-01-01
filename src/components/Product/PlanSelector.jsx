import { useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlanSelector = ({ openCart }) => {
  const [selectedPlan, setSelectedPlan] = useState("1GB, 7 days");
  const [crypto, setCrypto] = useState("SOL"); // Default crypto
  const [price, setPrice] = useState(1.23); // Default price for the selected plan in SOL

  // Price mapping for each plan in SOL, USDT, and BTC
  const priceMapping = {
    "1GB, 7 days": { SOL: 1.23, USDT: 32.5, BTC: 0.000036 },
    "5GB, 30 days": { SOL: 5.67, USDT: 149.5, BTC: 0.000174 },
    "10GB, 90 days": { SOL: 9.85, USDT: 260.8, BTC: 0.000304 },
  };

  // Update price when the plan changes
  const handlePlanChange = (event) => {
    const plan = event.target.value;
    setSelectedPlan(plan);
    setPrice(priceMapping[plan][crypto]);
  };

  // Update price when the crypto changes
  const handleCryptoChange = (event) => {
    const selectedCrypto = event.target.value;
    setCrypto(selectedCrypto);
    setPrice(priceMapping[selectedPlan][selectedCrypto]);
  };

  return (
    <div className="lg:pr-24 font-inter lg:py-8 sm:py-4 lg:px-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold">SOLSIM Global</h2>
      {/* Lead Text */}
      <p className="mt-2">
        This gift card is only redeemable on the e-commerce platform
      </p>
      {/* Paragraph */}
      <p className="mt-4">
        Purchase SOLSIM Global with Bitcoin, ETH or Crypto and enjoy stable
        high-speed internet access. Instant email delivery. No account required.
        Start living on crypto!
      </p>
      {/* Rating */}
      <div className="flex items-center mt-4">
        <span className="text-yellow-400 text-lg">
          {" "}
          &#9733;&#9733;&#9733;&#9733;&#9734;{" "}
        </span>
        <span className="ml-2 text-gray-700 font-medium">4.4 rating</span>
      </div>
      {/* Plan Selector */}
      <h3 className="text-2xl font-semibold mt-6">Select your plan</h3>
      <div className="flex justify-between items-center mt-4">
        {/* Plan Dropdown */}
        <select
          className="w-full h-12 border rounded w-2/3 p-2"
          value={selectedPlan}
          onChange={handlePlanChange}
        >
          <option>1GB, 7 days</option>
          <option>5GB, 30 days</option>
          <option>10GB, 90 days</option>
        </select>
        {/* Crypto Dropdown */}
        <select
          className="ml-4 h-12 border rounded p-2 w-1/3"
          value={crypto}
          onChange={handleCryptoChange}
        >
          <option value="SOL">SOL</option>
          <option value="USDT">USDT</option>
          <option value="BTC">BTC</option>
        </select>
      </div>
      {/* Estimated Price */}
      <div className="mt-4 text-lg px-2">
        Estimated Price:{" "}
        <span className="text-[#CC3DFF]">{`${price} ${crypto}`}</span>
      </div>
      {/* Add to Cart Button */}
      <button
        onClick={openCart}
        className="mt-4 w-full bg-[#CC3DFF] text-white py-2 rounded h-12 hover:opacity-80"
      >
        Add to Cart
        <FontAwesomeIcon icon={faCartShopping} className="ml-2" />
      </button>
    </div>
  );
};

export default PlanSelector;
