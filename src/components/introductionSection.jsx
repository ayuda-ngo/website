import { Section, media, theme } from "../styles/styles.jsx";

import { Fade } from "react-reveal";
import React from "react";
import styled from "styled-components";

const { colors, fontSizes, fonts } = theme;

const IntroductionSectionWrapper = styled(Section)`
  position: relative;
  margin-top: 150px;
  padding: 20px 10px;
  width: 90%;
  height: 500px;
  ${media.thone`
  width: 80%;
  height: unset;
  margin-top: 100px;
  `};
`;

const StyledOverline = styled.h1`
  color: ${colors.grey};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;

const StyledTitle = styled.h1`
  font-size: 90px;
  line-height: 1.1;
  margin: 0;
  // color: ${colors.white};
  color: #fec617;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 50px;`};
`;

const StyledSubtitle = styled.h3`
  margin-top: 25px;
  font-size: 60px;
  line-height: 1.1;
  width: 80%;
  color: ${colors.grey};
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
  ${media.phablet`font-size: 20px;`};
  ${media.phone`font-size: 20px;`};
`;

const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  font-size: 20px;
  color: ${colors.white};
  ${media.thone`width: 80%;`};
  ${media.thone`font-size: 16px;`};
`;

export default function IntroductionSection() {
  return (
    <IntroductionSectionWrapper>
      <Fade distance="20px">
        <StyledOverline>{"Hi, we are"}</StyledOverline>
      </Fade>
      <Fade bottom delay={1000} distance="20px">
        <StyledTitle>{"AYUDA NGO."}</StyledTitle>
      </Fade>
      <Fade delay={1800} distance="20px">
        <StyledSubtitle>
          {"We work for the betterment of our world."}
        </StyledSubtitle>
      </Fade>
      <Fade delay={2000} distance="10px">
        <StyledDescription>
          {
            "Bring out the change in society by spreading hands to help the unprivileged children and other backward communities."
          }
        </StyledDescription>
      </Fade>
    </IntroductionSectionWrapper>
  );
}
