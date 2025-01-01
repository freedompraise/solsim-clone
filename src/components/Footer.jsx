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
            <a href="https://twitter.com/freedom_praise" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </i>
        </div>
        <div class="bg-black w-10 h-10 rounded-full flex items-center justify-center">
          <i class="text-white text-2xl">
            <a
              href="https://www.facebook.com/profile.php?id=100009170232211"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </i>
        </div>
        <div class="bg-black w-10 h-10 rounded-full flex items-center justify-center">
          <i class="text-white text-2xl">
            <a href="https://github.com/freedompraise" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </i>
        </div>
        <div class="bg-black w-10 h-10 rounded-full flex items-center justify-center">
          <i class="text-white text-2xl">
            <a href="https://www.linkedin.com/in/praise-dike" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
