import { Section, media, theme } from "../styles/styles.jsx";

import { Fade } from "react-reveal";
import React from "react";
import { storySection } from "../information.js";
import styled from "styled-components";

const { colors, fontSizes, borderRadius } = theme;

const StoryDiv = styled.div`
  display: block;
  padding: 20px 10px;
  width: 98%;
  margin: 0px auto;
  background-color: none;
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
  border-radius: ${borderRadius};
`;

const StoryContainer = styled.div`
  margin-bottom: 20px;
  height: 300px;
  position: relative;
  background-color: rgba(3, 17, 26, 0.8);
  border-radius: ${borderRadius};
`;

const StoryContainerWrapper = styled(Section)`
  position: relative;
  color: ${colors.white};
`;

export default function StorySection() {
  return (
    <StoryContainerWrapper id="story">
      <StoryDiv>
        <Fade bottom distance="40px">
          <StoryTitle>
            <h1 className="heading p-3 mb-5">{storySection.title}</h1>
          </StoryTitle>
        </Fade>
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
          <VideoContainer className="embed-responsive embed-responsive-16by9 ">
            <video
              title={storySection.video.title}
              controls="controls"
              preload="metadata"
            >
              <source type="video/webm" src={storySection.video.src} />
            </video>
          </VideoContainer>
        </Fade>
      </StoryDiv>
    </StoryContainerWrapper>
  );
}
