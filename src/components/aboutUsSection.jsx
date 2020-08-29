import React from "react";
import { socialMediaLinks } from "../information.js";
import { Section } from "../styles/styles.jsx";
import styled from "styled-components";

const AboutUsSectionWrapper = styled(Section)`
  text-align: center;
  padding: 20px;
`;

export default function AboutUsSection() {
  return (
    <AboutUsSectionWrapper>
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>

      <a
        href={socialMediaLinks.facebook}
        className="icon-button facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>

      <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>

      <a
        href={socialMediaLinks.medium}
        className="icon-button medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-medium-m"></i>
        <span></span>
      </a>
    </AboutUsSectionWrapper>
  );
}
