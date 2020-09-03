import { media, theme } from "../styles/styles.jsx";

import React from "react";
import styled from "styled-components";

const { colors, fontSizes, borderRadius, cardShadow } = theme;

const ProjectCardContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 350px;
  width: 350px;
  height: 300px;
  border: 1px solid black;
  background-color: rgba(3, 17, 26, 0.8);
  margin: 55px;
  border-radius: ${borderRadius};
  box-shadow: ${cardShadow};

  ${media.thone`
  margin: 35px;
  max-width: fit-content;
  height: 350px;
  vertical-align: middle;
`};
`;

const ProjectCardBody = styled.div`
  position: absolute;
  transform: translateX(25%);
  width: 80%;

  ${media.thone`
  width: fit-content;
  transform: none;
  margin: 18px;
  `};
`;

const ProjectCardTitle = styled.div`
  padding: 10px 15px 10px 10px;
  text-align: right;
  font-size: ${fontSizes.xxl};

  ${media.thone`
  padding: 10px;
  text-align: center;
  padding: 0;
  `};
`;

const ProjectCardText = styled.div`
  text-align: left;
  padding: 0 10px 10px 90px;
  font-size: ${fontSizes.smish};
  color: ${colors.white};

  ${media.thone`
  padding: 10px;
  text-align: left;
  font-size: ${fontSizes.sm};
  `};
`;

const ProjectCardImageContainer = styled.div`
  display: flex;
  position: absolute;
  transform: translate(-35%, 18%);

  ${media.thone`
  transform: none;
  opacity: 0;
  position: relative;
  vertical-align: middle;
`};
`;

const ProjectCardImage = styled.img`
  max-width: 225px;
  height: 280px;
  border-radius: ${borderRadius};

  ${media.thone`
  max-width: inherit;
  height: 350px;
  `};
`;

const ProjectButton = styled.a`
  background: ${colors.grey};
  border-radius: 10px;
  width: 8rem;
  height: 2.2rem;
  line-height: 2.2rem;
  color: ${colors.black};
  text-decoration: none;
  border: 1px solid black;
  font-size: 1rem;
  vertical-align: middle;
  text-align: center;

  &:active {
    text-decoration: none;
    transform: translateY(3px);
  }

  &: focus, &:hover {
    color: ${colors.black};
    text-decoration: none;
    outline: none;
  }
`;

const ProjectButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-end;
  margin: 20px 10px 20px 0;
  transform: translate(200px, 265px);

  ${media.thone`
  margin: 20px 0;
  transform: translate(60%, 275px);
  `};
`;

export default function ProjectCard({ cardInfo }) {
  return (
    <ProjectCardContainer>
      <ProjectCardBody>
        <ProjectCardTitle>{cardInfo.title}</ProjectCardTitle>
        <ProjectCardText>{cardInfo.text}</ProjectCardText>
      </ProjectCardBody>
      <ProjectButtonWrapper>
        <ProjectButton href={cardInfo.link} target="_blank">
          See More
        </ProjectButton>
      </ProjectButtonWrapper>

      <ProjectCardImageContainer>
        <ProjectCardImage src={cardInfo.image} alt={cardInfo.title} />
      </ProjectCardImageContainer>
    </ProjectCardContainer>
  );
}
