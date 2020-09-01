import React, { Component } from "react";

import { Fade } from "react-reveal";
import IconLogo from "../assets/logo.webp";
import { mixins } from "../styles/styles.jsx";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0px 0px -50px;
`;

const StyledLogo = styled.div`
  ${mixins.flexCenter};
  a {
    display: inline;
  }
`;

class PageLoader extends Component {
  state = {
    show: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
    }, 1000);
  }
  render() {
    return (
      <LoaderWrapper>
        <Fade opposite when={this.state.show}>
          <StyledLogo>
            <a href="/" aria-label="home">
              <img src={IconLogo} width={"100px"} alt="Ayuda NGO" />
            </a>
          </StyledLogo>
        </Fade>
      </LoaderWrapper>
    );
  }
}
export default PageLoader;
