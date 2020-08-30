import { Col, Row } from "react-bootstrap";
import { storySection } from "../information.js";
import React from "react";
import styled from "styled-components";

import { theme, Section } from "../styles/styles.jsx";

const { colors, fontSizes, cardShadow } = theme;

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

const StoryHeading = styled.div`
  text-align: center;
  margin: 0px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  position: absolute;
`;

const StoryBody = styled.div`
  text-align: left;
  font-size: ${fontSizes.sm};
  opacity: 1;
  padding: 0 15px;
  margin: 0px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  width: 100%;
  position: absolute;
  opacity: 0.35;
  filter: blur(2px);
  transition: 0.3s ease;
`;

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const StoryContainer = styled(Section)`
  max-width: 94%;
  color: white;
  margin-bottom: 5%;
  height: 300px;
  border-radius: 0.8rem;
  position: relative;
  box-shadow: ${cardShadow};
  &:hover {
    ${StoryHeading} {
      opacity: 0;
    }
    ${StoryBody} {
      opacity: 1;
      filter: none;
    }
  }
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
        <Row>
          <Col lg={6}>
            <StoryContainer>
              <StoryHeading id="1">
                <h4 className="p-3">{storySection.howWeGotStrated.title}</h4>
              </StoryHeading>
              <StoryBody>{storySection.howWeGotStrated.text}</StoryBody>
            </StoryContainer>
          </Col>
          <Col lg={6}>
            <StoryContainer id="2">
              <StoryHeading>
                <h4 className="p-3">{storySection.whereAreWeNow.title}</h4>
              </StoryHeading>
              <StoryBody>{storySection.whereAreWeNow.text}</StoryBody>
            </StoryContainer>
          </Col>
        </Row>
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
