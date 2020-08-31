import React from "react";
import styled from "styled-components";
import { theme, Section, media } from "../styles/styles.jsx";

const { colors, fontSizes, fonts } = theme;

const IntroductionSectionWrapper = styled(Section)`
  position: relative;
  margin-top: 150px;
  padding: 20px 10px;
  width: 90%;
  ${media.thone`width: 80%;`};
`;

const StyledOverline = styled.h1`
  color: ${colors.grey};
  // color: #e9ff65;
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;

const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  // color: ${colors.white};
  color: #fec617;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;

const StyledSubtitle = styled.h3`
  font-size: 60px;
  line-height: 1.1;
  width: 80%;
  color: ${colors.grey};
  // color: #e9ff65;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
  ${media.phablet`font-size: 30px;`};
  ${media.phone`font-size: 20px;`};
`;

const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  color: ${colors.white};
  // color: #e9ff65;
  ${media.thone`width: 80%;`};
`;
export default function IntroductionSection() {
  return (
    <IntroductionSectionWrapper>
      <StyledOverline>{"Hi, we are"}</StyledOverline>
      <StyledTitle>{"AYUDA NGO."}</StyledTitle>
      <StyledSubtitle>
        {"We work for the betterment of our world."}
      </StyledSubtitle>
      <StyledDescription>
        {
          "Bring out the change in society by spreading hands to help the unprivileged children and other backward communities."
        }
      </StyledDescription>
    </IntroductionSectionWrapper>
  );
}
