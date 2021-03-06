import React, { Component } from "react";
import { media, mixins, theme } from "../styles/styles.jsx";

import { Fade } from "react-reveal";
import IconLogo from "../assets/logo.png";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLogo = styled.div`
  ${mixins.flexCenter};

  a {
    display: inline;
  }
`;

const StyledImage = styled.img`
  width: 160px;
  ${media.bigDesktop`width: 180px;`};
  ${media.thone`width: 120px;`};
`;

class PageLoader extends Component {
  state = {
    show: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
    }, theme.loaderDelay - 500);
  }
  render() {
    return (
      <LoaderWrapper>
        <Fade opposite when={this.state.show}>
          <StyledLogo>
            <a href="/" aria-label="home">
              <StyledImage src={IconLogo} alt="Ayuda NGO" />
            </a>
          </StyledLogo>
        </Fade>
      </LoaderWrapper>
    );
  }
}
export default PageLoader;
