const PlanSelector = ({ openCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-lg font-semibold">Select your plan</h3>
      <select className="w-full mt-4 p-2 border rounded">
        <option>1GB, 7 days</option>
        <option>5GB, 30 days</option>
        <option>10GB, 90 days</option>
      </select>
      <button
        onClick={openCart}
        className="mt-4 w-full bg-[#CC3DFF] text-white py-2 rounded hover:bg-purple-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PlanSelector;
