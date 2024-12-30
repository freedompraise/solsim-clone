import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; 2024 Solsim. All rights reserved.</p>
        </div>

        {/* Center Section */}
        <div className="space-x-6">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-xl hover:text-blue-500"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-xl hover:text-black"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-xl hover:text-pink-500"
          />
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <a href="#" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-sm hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
