import React, { Component } from "react";
import styled from "styled-components";
import { theme, media, mixins } from "../styles/styles.jsx";
import Menu from "./menu.jsx";
import IconLogo from "../assets/logo.webp";
import { throttle } from "../utils/index";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { navLinks } from "../information.js";
const { colors, fontSizes, fonts, loaderDelay } = theme;

const StyledContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.bg};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${(props) =>
    props.scrollDirection === "none" ? theme.navHeight : theme.navScrollHeight};
  box-shadow: ${(props) =>
    props.scrollDirection === "up"
      ? `0 10px 30px -10px ${colors.black}`
      : "none"};
  transform: translateY(
    ${(props) =>
      props.scrollDirection === "down" ? `-${theme.navScrollHeight}` : "0px"}
  );
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;
const StyledNav = styled.nav`
  ${mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${colors.white};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
`;
const StyledLogo = styled.div`
  ${mixins.flexCenter};
  a {
    display: inline;
  }
`;
const StyledHamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
const StyledHamburgerInner = styled.div`
  background-color: ${colors.white};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${(props) =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: "";
    display: block;
    background-color: ${colors.white};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
    top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${(props) => (props.menuOpen ? 0 : 1)};
    transition: ${(props) =>
      props.menuOpen ? theme.hamBeforeActive : theme.hamBefore};
  }
  &:after {
    width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${(props) =>
      props.menuOpen ? theme.hamAfterActive : theme.hamAfter};
  }
`;
const StyledLink = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
const StyledList = styled.ol`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.md};
`;

const Link = styled.a`
  color: ${colors.white};
  cursor: pointer;
  &:focus,
  &:hover {
    outline: none;
    text-decoration: none;
    color: ${colors.white};
  }
`;
const DELTA = 5;

class NavBar extends Component {
  state = {
    isMounted: true,
    menuOpen: false,
    scrollDirection: "none",
    lastScrollTop: 0,
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({ isMounted: true }, () => {
          window.addEventListener("scroll", () =>
            throttle(this.handleScroll())
          );
          window.addEventListener("resize", () =>
            throttle(this.handleResize())
          );
          window.addEventListener("keydown", (e) => this.handleKeydown(e));
        }),
      100
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.handleScroll());
    window.removeEventListener("resize", () => this.handleResize());
    window.removeEventListener("keydown", (e) => this.handleKeydown(e));
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleScroll = () => {
    const { isMounted, menuOpen, scrollDirection, lastScrollTop } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: "none" });
    } else if (fromTop > lastScrollTop && fromTop > 100) {
      if (scrollDirection !== "down") {
        this.setState({ scrollDirection: "down" });
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== "up") {
        this.setState({ scrollDirection: "up" });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  };

  handleResize = () => {
    if (window.innerWidth > 768 && this.state.menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = (e) => {
    if (!this.state.menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === "Escape") {
      this.toggleMenu();
    }
  };

  render() {
    const { isMounted, menuOpen, scrollDirection } = this.state;
    const { isHome } = this.props;
    const timeout = isHome ? loaderDelay : 0;
    const fadeClass = isHome ? "fade" : "";
    const fadeDownClass = isHome ? "fadedown" : "";

    return (
      <StyledContainer scrollDirection={scrollDirection}>
        <StyledNav>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledLogo src={IconLogo} tabindex="-1">
                  <a href="/" aria-label="home">
                    <img src={IconLogo} width={"42px"} alt="Ayuda NGO" />
                  </a>
                </StyledLogo>
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledHamburger onClick={this.toggleMenu}>
                  <StyledHamburgerBox>
                    <StyledHamburgerInner menuOpen={menuOpen} />
                  </StyledHamburgerBox>
                </StyledHamburger>
              </CSSTransition>
            )}
          </TransitionGroup>

          <StyledLink>
            <StyledList>
              <TransitionGroup component={null}>
                {isMounted &&
                  navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <CSSTransition
                      key={i}
                      classNames={fadeDownClass}
                      timeout={timeout}
                    >
                      <StyledListItem
                        key={i}
                        style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
                      >
                        <Link href={url}>{name}</Link>{" "}
                      </StyledListItem>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </StyledList>
          </StyledLink>
        </StyledNav>

        <Menu menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
      </StyledContainer>
    );
  }
}

export default NavBar;