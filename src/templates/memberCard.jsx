import { Image } from "react-bootstrap";
import React from "react";

import styled from "styled-components";
import { theme } from "../styles/styles.jsx";
const { colors, cardShadow } = theme;

const StyledCard = styled.div`
  background: ${colors.bg};
  box-shadow: ${cardShadow};
  border-radius: 30px;
  max-width: 250px;
  width: 250px;
  height: 340px;
  text-align: center;
  padding: 10px;
  margin: 25px;
`;

const MemberOverlay = styled.div`
  height: 220px;
  width: 220px;
  border-radius: 50%;
  padding: 15px;
  margin-top: 15px;
  opacity: 0;
  position: absolute;
  transition: opacity 0.5s ease-in-out;
  background-color: rgba(53, 56, 57, 0.7);
`;

const MemberImageDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  &:hover ${MemberOverlay} {
    opacity: 1;
  }
`;

const MemberRoundedImage = styled(Image)`
  height: 240px;
  width: 240px;
  border-radius: 50%;
  padding: 15px;
  margin-top: 5px;
  display: block;
  position: absolute;
`;

const MemberSocialMedia = styled.div`
  color: ${colors.white};
  font-size: 20px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const MemberBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
`;

const MemberName = styled.div`
  margin-top: 240px;
  padding: 5px;
  color: white;
  font-size: larger;
  width: 100%;
`;

const MemberRole = styled.div`
  color: white;
  font-size: large;
  width: 100%;
`;

export default function MemberCard({ cardInfo }) {
  return (
    <StyledCard>
      <MemberImageDiv>
        <MemberRoundedImage src={cardInfo.image} alt={cardInfo.name} />
        <MemberOverlay>
          <MemberSocialMedia>
            {cardInfo.linkedin ? (
              <a
                href={cardInfo.linkedin}
                className="icon-button linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            ) : null}
            {cardInfo.instagram ? (
              <a
                href={cardInfo.instagram}
                className="icon-button instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            ) : null}
          </MemberSocialMedia>
        </MemberOverlay>
      </MemberImageDiv>

      <MemberBody>
        <MemberName>{cardInfo.name}</MemberName>
        <MemberRole>{cardInfo.role}</MemberRole>
      </MemberBody>
    </StyledCard>
  );
}
