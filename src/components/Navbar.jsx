import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 w-full shadow-lg bg-white">
      <div className="max-w-[1512px] mx-auto flex items-center justify-between h-[90px] px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <a href="/" className="flex items-center space-x-1">
            <img src={logo} alt="Logo" className="w-[27.64px] h-[32px]" />
            <h1 className="text-black font-inter font-semibold text-[16px] leading-[19px] tracking-[0.14em]">
              SOLSIM
            </h1>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {["Twitter", "Telegram", "Dex Screener", "Docs"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-satoshi font-bold text-[16px] leading-[22px] text-[#001027] hover:underline"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {location.pathname === "/" ? (
            <a
              href="/product"
              className="bg-[#CC3DFF] text-white font-inter font-bold text-[16px] py-[12px] px-[24px] rounded-[4px] hover:opacity-90"
            >
              Go to Product Page
            </a>
          ) : (
            <a
              href="/"
              className="bg-[#CC3DFF] text-white font-inter font-bold text-[16px] py-[12px] px-[24px] rounded-[4px] hover:opacity-90"
            >
              Go to Home Page
            </a>
          )}
          <div className="bg-white border border-[#CC3DFF] rounded-[8px] w-[44px] h-[44px] flex justify-center items-center">
            <i className="text-[#CC3DFF] text-[20px]">
              <FontAwesomeIcon icon={faCartShopping} />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
