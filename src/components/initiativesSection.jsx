import React from "react";
import styled from "styled-components";
import { Section } from "../styles/styles.jsx";
import ProjectCard from "../templates/projectCard.jsx";
import { initiativesSection } from "../information.js";

const InitiativesSectionWrapper = styled(Section)`
  position: relative;
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
          <h1 className="heading">{initiativesSection.title}</h1>
          <p className="subTitle">{initiativesSection.subtitle}</p>
        </div>
      </InitiativesContainer>
      <div className="project-main-div">
        <InitiativesBody>
          {initiativesSection.initiatives.map((initiative) => {
            return <ProjectCard key={initiative.id} cardInfo={initiative} />;
          })}
        </InitiativesBody>
      </div>
    </InitiativesSectionWrapper>
  );
}
