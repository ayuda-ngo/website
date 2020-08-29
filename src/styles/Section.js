import styled from "styled-components";
import media from "./media";

export const Section = styled.section`
  margin: 0 auto;
  padding: 20px 0;
  max-width: 1000px;
  // border: 2px solid black;
  ${media.tablet`padding: 50px 0;`};
`;
