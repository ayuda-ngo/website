import { Section, theme } from "../styles/styles.jsx";

import { Fade } from "react-reveal";
import ProjectCard from "../templates/projectCard.jsx";
import React from "react";
import { initiativesSection } from "../information.js";
import styled from "styled-components";

const { colors } = theme;

const InitiativesSectionWrapper = styled(Section)`
  position: relative;
  color: ${colors.white};
`;

const InitiativesContainer = styled.div`
  display: flex;
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
`;

const InitiativesBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function InitiativesSection() {
  return (
    <InitiativesSectionWrapper id="initiatives">
      <InitiativesContainer>
        <div className="project-header p-3">
          <Fade bottom distance="40px">
            <h1 className="heading">{initiativesSection.title}</h1>
          </Fade>
          <div
            style={{
              height: "2px",
              background: "white",
            }}
          ></div>
          <Fade delay={1000}>
            <p className="subTitle">{initiativesSection.subtitle}</p>
          </Fade>
        </div>
      </InitiativesContainer>
      <InitiativesBody>
        {initiativesSection.initiatives.map((initiative, i) => {
          return (
            <Fade bottom delay={150 * i} distance="20px" key={initiative.id}>
              <ProjectCard cardInfo={initiative} />
            </Fade>
          );
        })}
      </InitiativesBody>
    </InitiativesSectionWrapper>
  );
}
