import React, { useEffect, useRef, useState } from "react";
import { Section, media, mixins, theme } from "../styles/styles.jsx";

import { Fade } from "react-reveal";
import { eventsSection } from "../information.js";
import styled from "styled-components";

// import EventCard from "../templates/eventCard.jsx";

const { colors, fontSizes, fonts, cardShadow, borderRadius } = theme;

const EventsSectionWrapper = styled(Section)`
  position: relative;
  margin-bottom: 50px;
  color: ${colors.white};

  ${media.thone`margin: 0;`};
`;

const EventsTitle = styled.div`
  padding: 3px;
  width: 100%;
`;

const EventsDiv = styled.div`
  display: flex;
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
  background: none;
  font-family: inherit;
`;

const StyledTabList = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  padding: 0;
  margin: 0;
  list-style: none;

  ${media.thone`
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
  `};
  ${media.phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
  `};

  li {
    &:first-of-type {
      ${media.thone`
        margin-left: 50px;
      `};
      ${media.phablet`
        margin-left: 25px;
      `};
    }
    &:last-of-type {
      ${media.thone`
        padding-right: 50px;
      `};
      ${media.phablet`
        padding-right: 25px;
      `};
    }
  }
`;

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  transition: ${theme.transition};
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  border-left: 2px solid ${colors.black};
  text-align: left;
  white-space: nowrap;
  outline: none;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.white};
  ${media.tablet`padding: 0 15px 2px;`};
  ${media.thone`
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
  
    border-bottom: 2px solid ${colors.black};
    min-width: 120px;
  `};
  &:hover,
  &:focus {
    outline: none;
    background-color: ${colors.black};
  }
`;

const StyledHighlight = styled.span`
  display: block;
  background: ${colors.white};
  width: 2px;
  height: ${theme.tabHeight}px;
  border-radius: ${borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${(props) =>
      props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0}px
  );
  ${media.thone`
    width: 100%;
    max-width: ${theme.tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${(props) =>
        props.activeTabId > 0 ? props.activeTabId * theme.tabWidth : 0}px
    );
    margin-left: 50px;
  `};
  ${media.phablet`
    margin-left: 25px;
  `};
`;

const EventsContainer = styled.div`
  display: flex;
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
  align-items: flex-start;
  position: relative;

  ${media.thone`
    display: block;
  `};
`;

const StyledTabContent = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  padding-top: 12px;
  padding-left: 30px;
  outline: none;
  // border: 2px solid black;

  ${media.tablet`padding-left: 20px;
  height: 600px;
  `};

  ${media.thone`
    padding-left: 0;
    padding-top: 0;
    height: 500px;
    background-color: rgba(3, 17, 26, 0.8);
    border-radius: 10px;
  `};
`;

const EventHeading = styled.div`
  padding: 10px 30px;
  font-size: ${fontSizes.xxl};
  color: inherit;

  ${media.thone`
    margin-top: 20px;
  `};
`;

const EventText = styled.div`
  padding: 0 20px 10px 20px;
  font-size: ${fontSizes.smish};
  color: inherit;

  ${media.thone`
    margin-top: 20px;
    text-align: center;
    font-size: ${fontSizes.md};
  `};
`;

const EventCardImageWrapper = styled.div`
  width: 100%;
  // border: 2px solid red;

  ${media.thone`
    width: 100%;
    height: inherit;
    position: absolute;
    opacity: 0;
`};
`;

const EventCardImage = styled.img`
  height: 280px;
  width: 80%;
  border-radius: 20px;

  box-shadow: ${cardShadow};
  ${media.thone`
  border-radius: 10px;
  width: 100%;
  height: inherit;
`};
`;

const EventCardWrapper = styled.div`
  background-color: rgba(3, 17, 26, 0.95);
  border-radius: ${borderRadius};
  color: ${colors.white};
  position: absolute;
  width: 45%;
  height: 220px;
  transform: translate(100%, 90px);

  ${media.desktop`
    width: 50%;
    transform: translate(100%, 100px);
`};

  ${media.thone`
  color: ${colors.white};
  background-color: unset;
  border-radius: 10px;
  transform: none;
  width: 100%;
  height: inherit;
  opacity: 1;
  box-shadow: ${cardShadow};
`};
`;

export default function EventsSection() {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
    } else {
      // If we're at the end, go to the start
      if (tabFocus >= tabs.current.length) {
        setTabFocus(0);
      }
      // If we're at the start, move to the end
      if (tabFocus < 0) {
        setTabFocus(tabs.current.length - 1);
      }
    }
  };

  // Only re-run the effect if tabFocus changes
  //eslint-disable-next-line
  useEffect(() => focusTab(), [tabFocus]);

  return (
    <EventsSectionWrapper id="events">
      <EventsDiv>
        <EventsTitle>
          <Fade bottom distance="40px">
            <div className="events-header">
              <h1 className="heading">{eventsSection.title}</h1>
            </div>
          </Fade>
        </EventsTitle>
      </EventsDiv>

      <EventsContainer>
        <StyledTabList role="tablist" aria-label="Events tabs">
          {eventsSection.events.map((event, i) => {
            return (
              <li key={i}>
                <StyledTabButton
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={(el) => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}
                  tabIndex={activeTabId === i ? "0" : "-1"}
                >
                  <span>{event.name}</span>
                </StyledTabButton>
              </li>
            );
          })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>
        {eventsSection.events.map((event, i) => {
          return (
            <StyledTabContent
              key={i}
              isActive={activeTabId === i}
              id={`panel-${i}`}
              role="tabpanel"
              aria-labelledby={`tab-${i}`}
              tabIndex={activeTabId === i ? "0" : "-1"}
              hidden={activeTabId !== i}
            >
              <EventCardWrapper>
                <EventHeading>{event.heading}</EventHeading>
                <EventText>{event.text}</EventText>
              </EventCardWrapper>
              <EventCardImageWrapper>
                <EventCardImage alt={event.heading} src={event.image} />
              </EventCardImageWrapper>
            </StyledTabContent>
          );
        })}
      </EventsContainer>
    </EventsSectionWrapper>
  );
}
