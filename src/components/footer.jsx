import { Section, theme } from "../styles/styles.jsx";

import React from "react";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const FooterWrapper = styled(Section)`
  text-align: center;
  color: ${colors.white};
  padding: 0 !important;
`;

const Copyright = styled.div`
  font-size: ${fontSizes.xs};
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Copyright>{"© Copyright 2020 | Ayuda NGO VIT"}</Copyright>
    </FooterWrapper>
  );
}

//<div className="footer-text">{"Made with 🤍 by Jainam Desai"}</div>
