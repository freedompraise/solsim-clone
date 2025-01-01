import logo from "../../assets/logo.png";

const ProductCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:mx-8 lg:p-8 sm:p-4 lg:my-8 flex flex-col items-center">
      {/* Gradient Background */}
      <div className="relative w-full h-48 rounded-lg bg-gradient-to-r from-purple-500 to-[#CC3DFF] flex items-center justify-center">
        {/* Logo */}
        <img
          src={logo}
          alt="SOLSIM Logo"
          className="absolute top-4 left-4 w-12 h-12"
        />

        {/* Card Title */}
        <h2 className="text-white text-xl font-semibold">
          North America SOLSIM
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
