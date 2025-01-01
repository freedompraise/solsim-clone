import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlanSelector = ({ openCart }) => {
  return (
    <div className="lg:pr-24 lg:py-8 sm:py-4 lg:px-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold">SOLSIM Global</h2>

      {/* Lead Text */}
      <p className="mt-2">
        This gift card is only redeemable on the e-commerce platform
      </p>

      {/* Paragraph */}
      <p className=" mt-4">
        Purchase SOLSIM Global with Bitcoin, ETH or Crypto and enjoy stable
        high-speed internet access. Instant email delivery. No account required.
        Start living on crypto!
      </p>

      {/* Rating */}
      <div className="flex items-center mt-4">
        <span className="text-yellow-400 text-lg">
          &#9733;&#9733;&#9733;&#9733;&#9734;
        </span>
        <span className="ml-2 text-gray-700 font-medium">4.4 rating</span>
      </div>

      {/* Plan Selector */}
      <h3 className="text-2xl font-semibold mt-6">Select your plan</h3>
      <div className="flex justify-between">
        <select className="w-full mt-4 h-12 border rounded w-2/3">
          <option>1GB, 7 days</option>
          <option>5GB, 30 days</option>
          <option>10GB, 90 days</option>
        </select>
        <input
          type="number"
          className="w-1/3 mt-4 p-2 border rounded"
          placeholder="est. SOL"
          value={1.27}
        />
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
