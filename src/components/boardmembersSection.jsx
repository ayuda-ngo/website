import { boardMembersSection } from "../information.js";
import React from "react";
import styled from "styled-components";

import MemberCard from "../templates/memberCard.jsx";

import { theme, Section, media, mixins } from "../styles/styles.jsx";
const { colors } = theme;

const BoardMembersContainer = styled.div`
  display: flex;
  width: 90%;
  padding: 20px 10px 20px 10px;
  margin: 0px auto;
  background-color: ${colors.bg};
  font-family: inherit;
`;

const BoardMembersSectionWrapper = styled(Section)`
  position: relative;
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
        <h1 className="heading p-3 mb-5">{boardMembersSection.title}</h1>
      </BoardMembersContainer>

      <MembersCardDiv>
        {boardMembersSection.boardMembers.map((member) => {
          return <MemberCard key={member.id} cardInfo={member} />;
        })}
      </MembersCardDiv>
    </BoardMembersSectionWrapper>
  );
}
