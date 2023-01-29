import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { isMobile } from "react-device-detect";
import {
  socialContainer,
  socialLink,
  linkedin,
  github,
  email,
} from "./socialMediaBanner.module.css";

const SocialMediaBanner = () => {
  return (
    <div class={socialContainer}>
      <a
        href="https://www.linkedin.com/in/cumartinal/"
        target="_blank"
        rel="noreferrer"
        className={[socialLink, linkedin].join(" ")}
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://github.com/cumartinal"
        target="_blank"
        rel="noreferrer"
        className={[socialLink, github].join(" ")}
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <EmailLink />
    </div>
  );
};

const EmailLink = () => {
  if (isMobile) {
    return (
      <a
        href="mailto:cumartinal@gmail.com"
        className={[socialLink, email].join(" ")}
      >
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    );
  }
  {
    /*TODO: Make it click to copy on desktop */
  }
  return (
    <a
      href="mailto:cumartinal@gmail.com"
      className={[socialLink, email].join(" ")}
    >
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
    </a>
  );
};

export default SocialMediaBanner;
