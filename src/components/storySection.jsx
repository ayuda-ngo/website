import { Section, media, theme } from "../styles/styles.jsx";

import React from "react";
import { storySection } from "../information.js";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const StoryDiv = styled.div`
  display: block;
  padding: 20px 10px;
  width: 98%;
  margin: 0px auto;
  background-color: ${colors.bg};
`;

const StoryTitle = styled.div`
  padding: 3px;
`;

const StoryHeading = styled.h4`
  text-align: center;
  padding: 10px;
  padding-top: 30px;
`;

const StoryBody = styled.div`
  text-align: left;
  font-size: ${fontSizes.sm};
  padding: 15px;
  margin: 10px;
  width: content-fit;
  position: relative;
  text-align: center;

  ${media.thone`
  font-size: ${fontSizes.smish};
  `};
`;

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const StoryContainer = styled.div`
  margin-bottom: 20px;
  height: 300px;
  position: relative;
  background-color: ${colors.cardColor};
  border-radius: 10px;
`;

const StoryContainerWrapper = styled(Section)`
  position: relative;
  color: ${colors.white};
`;

export default function StorySection() {
  return (
    <StoryContainerWrapper id="story">
      <StoryDiv>
        <StoryTitle>
          <h1 className="heading p-3 mb-5">{storySection.title}</h1>
        </StoryTitle>
        <div className="row">
          <div className="col lg-6">
            <StoryContainer>
              <StoryHeading>{storySection.howWeGotStrated.title}</StoryHeading>
              <StoryBody>{storySection.howWeGotStrated.text}</StoryBody>
            </StoryContainer>
          </div>
          <div className="col lg-6">
            <StoryContainer id="2">
              <StoryHeading>{storySection.whereAreWeNow.title}</StoryHeading>

              <StoryBody>{storySection.whereAreWeNow.text}</StoryBody>
            </StoryContainer>
          </div>
        </div>
        <VideoContainer className="embed-responsive embed-responsive-16by9 ">
          <video
            title={storySection.video.title}
            controls="controls"
            preload="metadata"
          >
            <source type="video/webm" src={storySection.video.src} />
          </video>
        </VideoContainer>
      </StoryDiv>
    </StoryContainerWrapper>
  );
}
