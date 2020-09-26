import { Section, media, theme } from "../styles/styles.jsx";

import { Fade } from "react-reveal";
import React from "react";
import ReactPlayer from "react-player/lazy";
import { storySection } from "../information.js";
import styled from "styled-components";

const { colors, fontSizes, borderRadius, cardShadow } = theme;

const StoryDiv = styled.div`
  display: block;
  padding: 20px 10px;
  width: 98%;
  margin: 0 auto;
  background-color: none;
`;

const StoryTitle = styled.div`
  padding: 3px;
  padding-top: 30px;
  width: 90%;
  margin: 0 auto;
`;

const StoryHeading = styled.h4`
  text-align: center;
  padding: 10px;
`;

const StoryBody = styled.div`
  text-align: left;
  font-size: ${fontSizes.md};
  padding: 10px;
  margin: 10px;
  width: fit-content;
  position: relative;
  text-align: center;

  ${media.thone`
    font-size: ${fontSizes.md};
  `};

  ${media.phablet`
    font-size: ${fontSizes.sm};
  `};

  ${media.tiny`
    font-size: ${fontSizes.smish};
  `};
`;

const PlayButton = styled.i`
  color: rgba(3, 17, 26);
`;

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius};
  box-shadow: ${cardShadow};
`;

const StyledReactPlayer = styled(ReactPlayer)`
  ${media.thone`
    height: 360px !important;
  `};
`;

const StoryContainer = styled.div`
  margin-bottom: 20px;
  height: 300px;
  position: relative;
  background-color: rgba(3, 17, 26, 0.8);
  border-radius: ${borderRadius};
  box-shadow: ${cardShadow};
`;

const StoryContainerWrapper = styled(Section)`
  position: relative;
  color: ${colors.white};
`;

export default function StorySection() {
  return (
    <StoryContainerWrapper id="story">
      <StoryTitle>
        <Fade bottom distance="40px">
          <h1 className="heading">{storySection.title}</h1>
        </Fade>
        <div
          style={{
            height: "2px",
            background: "white",
            // transform: "translateY(-50px)",
          }}
        ></div>
      </StoryTitle>
      <StoryDiv>
        <div className="row">
          <div className="col-lg-6">
            <Fade left duration={600} distance="20px">
              <StoryContainer>
                <StoryHeading>
                  {storySection.howWeGotStrated.title}
                </StoryHeading>
                <StoryBody>{storySection.howWeGotStrated.text}</StoryBody>
              </StoryContainer>
            </Fade>
          </div>
          <div className="col-lg-6">
            <Fade right duration={600} distance="20px">
              <StoryContainer id="2">
                <StoryHeading>{storySection.whereAreWeNow.title}</StoryHeading>
                <StoryBody>{storySection.whereAreWeNow.text}</StoryBody>
              </StoryContainer>
            </Fade>
          </div>
        </div>
        <Fade bottom distance="10px">
          <VideoContainer className="embed-responsive embed-responsive-16by9">
            <StyledReactPlayer
              className="react-player"
              title={storySection.video.title}
              light={storySection.video.light}
              width="100%"
              height="540px"
              playing
              url={storySection.video.src}
              controls
              preload="metadata"
              playIcon={<PlayButton className="fa fa-play fa-4x"></PlayButton>}
            />
          </VideoContainer>
        </Fade>
      </StoryDiv>
    </StoryContainerWrapper>
  );
}
