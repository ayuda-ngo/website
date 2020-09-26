import { Section, media, mixins, theme } from "../styles/styles.jsx";

import { Fade } from "react-reveal";
import MemberCard from "../templates/memberCard.jsx";
import React from "react";
import { boardMembersSection } from "../information.js";
import styled from "styled-components";

const { colors } = theme;

const BoardMembersContainer = styled.div`
  display: flex;
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
  background-color: none;
  font-family: inherit;
`;

const BoardMembersSectionWrapper = styled(Section)`
  position: relative;
  color: ${colors.white};
`;

const MembersCardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${media.tablet`
  ${mixins.scrollbar};
  flex-direction: column;
  overflow-x: scroll;
  height:400px;
  `};
`;

export default function BoardMembersSection() {
  return (
    <BoardMembersSectionWrapper id="members">
      <BoardMembersContainer>
        <div className="boardmembers-header p-3 w-100">
          <Fade bottom distance="40px">
            <h1 className="heading">{boardMembersSection.title}</h1>
          </Fade>
          <div
            style={{
              height: "2px",
              background: "white",
            }}
          ></div>
        </div>
      </BoardMembersContainer>

      <MembersCardDiv>
        {boardMembersSection.boardMembers.map((member, i) => {
          return (
            <Fade bottom delay={80 * i} distance="20px" key={member.id}>
              <MemberCard cardInfo={member} />
            </Fade>
          );
        })}
      </MembersCardDiv>
    </BoardMembersSectionWrapper>
  );
}
