import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import React, { Component } from "react";

import { Fade } from "react-reveal";
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

class PageLoader extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }
  render() {
    return (
      <LoaderWrapper>
        <Fade opposite when={this.state.loading}>
          <Loader type="Circles" color={colors.white} height={80} width={80} />
        </Fade>
      </LoaderWrapper>
    );
  }
}
export default PageLoader;
