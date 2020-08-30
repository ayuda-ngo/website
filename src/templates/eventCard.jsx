import React from "react";
import styled from "styled-components";
import { theme, media, mixins } from "../styles/styles.jsx";

const { colors, fontSizes } = theme;

const StyledTabContent = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  padding-top: 12px;
  padding-left: 30px;
  border: 2px solid black;
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 0;`};
  ul {
    ${mixins.fancyList};
  }
  a {
    ${mixins.inlineLink};
  }
`;

const EventHeading = styled.div`
  padding: 10px;
  font-size: ${fontSizes.xxl};
`;

const EventText = styled.div`
  padding: 10px;
  font-size: ${fontSizes.smish};
  color: ${colors.white};
`;

export default function EventCard({ title, text }) {
  return (
    <StyledTabContent>
      <EventHeading>{title}</EventHeading>
      <EventText>{text}</EventText>
    </StyledTabContent>
  );
}
