import logo from "../../assets/logo.png";

const ProductCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img src={logo} alt="SOLSIM Card" className="w-full rounded-lg" />
      <h2 className="text-xl font-semibold mt-4">North America SOLSIM</h2>
    </div>
  );
};

export default ProductCard;
