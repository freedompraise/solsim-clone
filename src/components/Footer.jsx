import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="bg-purple-200 py-4">
      <div class="flex justify-center gap-4">
        <div class="bg-black w-10 h-10 rounded-full flex items-center justify-center">
          <i class="text-white text-2xl">
            <FontAwesomeIcon icon={faTwitter} />
          </i>
        </div>
        <div class="bg-black w-10 h-10 rounded-full flex items-center justify-center">
          <i class="text-white text-2xl">
            <FontAwesomeIcon icon={faFacebook} />
          </i>
        </div>
        <div class="bg-black w-10 h-10 rounded-full flex items-center justify-center">
          <i class="text-white text-2xl">
            <FontAwesomeIcon icon={faGithub} />
          </i>
        </div>
        <div class="bg-black w-10 h-10 rounded-full flex items-center justify-center">
          <i class="text-white text-2xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
