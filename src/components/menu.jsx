import { media, mixins, theme } from "../styles/styles.jsx";

import PropTypes from "prop-types";
import React from "react";
import { navLinks } from "../information.js";
import styled from "styled-components";

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${(props) => (props.menuOpen ? "visible" : "hidden")};
  display: none;
  ${media.tablet`display: block;`};
`;
const Sidebar = styled.aside`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: rgb(3, 17, 26);
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${fonts.SFMono};
  // box-shadow: -10px 0px 30px -15px ${colors.white};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`;

const NavLinks = styled.nav`
  ${mixins.flexBetween};
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: ${colors.white};
`;

const NavList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`;

const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${fontSizes.lg};
  counter-increment: item 1;
  ${media.thone`
    margin: 0 auto 10px;
    font-size: ${fontSizes.md};
  `};
  ${media.tiny`font-size: ${fontSizes.md};`};
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

const Menu = ({ menuOpen, toggleMenu }) => {
  const handleMenuClick = (e) => {
    const target = e.target;
    const isLink = target.hasAttribute("href");
    const isNotMenu =
      target.classList && target.classList[0].includes("StyledContainer");

    if (isLink || isNotMenu) {
      toggleMenu();
    }
  };

  return (
    <StyledContainer
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <Sidebar>
        <NavLinks>
          <NavList>
            {navLinks.map(({ url, name }, i) => (
              <NavListItem key={i}>
                <Link href={url}>{name}</Link>
              </NavListItem>
            ))}
          </NavList>
        </NavLinks>
      </Sidebar>
    </StyledContainer>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
