import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import { theme } from "../styles/styles.jsx";

const { colors } = theme;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0px 0px -50px;
`;

export default function PageLoader() {
  return (
    <LoaderWrapper>
      <Loader
        type="Circles"
        color={colors.white}
        height={80}
        width={80}
        timeout={28000}
      />
    </LoaderWrapper>
  );
}
