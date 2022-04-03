import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class SocialIcons extends React.Component {
  render() {
    return (
      <div className="social">
        <a href="https://www.linkedin.com/in/oswaldo-d%C3%ADaz-397b036b/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/oswaldodiaz">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/imoswidiaz/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/imoswidiaz/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    );
  }
}

export default SocialIcons;
