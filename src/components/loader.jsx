import React, { Component } from "react";

import { Fade } from "react-reveal";
import IconLogo from "../assets/logo.jpg";
import { media } from "../styles/styles.jsx";
import { mixins } from "../styles/styles.jsx";
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
  width: 150px;
  ${media.bigDesktop`width: 120px;`};
  ${media.thone`width: 100px;`};
`;

class PageLoader extends Component {
  state = {
    show: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
    }, 1800);
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
