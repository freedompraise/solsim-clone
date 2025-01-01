import logo from "../../assets/logo.png";

const ProductCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:mx-8 p-8 lg:my-8 flex flex-col items-center h-600 min-h-screen">
      {/* Gradient Background */}
      <div
        className="relative rounded-lg bg-gradient-to-tl from-[#CC3DFF] to-purple-500 p-6 flex flex-col justify-center w-full max-w-md"
        style={{
          height: "293px",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="SOLSIM Logo"
          className="absolute top-6 left-6 w-16 h-16"
        />

        {/* Card Title */}
        <h2 className="text-white text-2xl font-semibold text-center mt-32">
          North America SOLSIM
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
