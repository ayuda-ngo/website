import { Section, media, theme } from "../styles/styles.jsx";

import React from "react";
import { getInTouchSection } from "../information.js";
import styled from "styled-components";

const { colors, fontSizes, borderRadius } = theme;

const ContactContainer = styled.div`
  width: 90%;
  padding: 20px 10px 20px 10px;
  margin: 0px auto;

  font-family: inherit;
  justify-content: center;
`;

const ContactDescription = styled.div`
  color: ${colors.white};
  text-align: center;
  padding: 8px;
  font-size: ${fontSizes.md};
`;

const GetInTouchWrapper = styled(Section)`
  position: relative;
  background-color: rgba(35, 35, 43, 0.8);
  border-radius: ${borderRadius};
  color: white;
  padding: 25px;
  margin: 50px auto;
  max-width: 94%;

  ${media.tablet`
    border-radius: 0;
    max-width: 100%;
  `};
`;

const ContactButton = styled.a`
  background: ${colors.grey};
  border-radius: 10px;
  width: 8rem;
  height: 2.2rem;
  line-height: 2.2rem;
  color: ${colors.black};
  text-decoration: none;
  border: 1px solid black;
  font-size: 1rem;
  vertical-align: middle;
  text-align: center;

  &:active {
    text-decoration: none;
    transform: translateY(3px);
  }

  &: focus, &:hover {
    color: ${colors.black};
    text-decoration: none;
    outline: none;
  }
`;

const ContactButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export default function GetInTouch() {
  return (
    <GetInTouchWrapper id="contact">
      <ContactContainer>
        <h2 className="heading p-3 ">{getInTouchSection.title}</h2>
        <ContactDescription>{getInTouchSection.text}</ContactDescription>
        <ContactButtonWrapper>
          <ContactButton href="mailto:ngoayuda@gmail.com">
            Contact Us
          </ContactButton>
        </ContactButtonWrapper>
      </ContactContainer>
    </GetInTouchWrapper>
  );
}
