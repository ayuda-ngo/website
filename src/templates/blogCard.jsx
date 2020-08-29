import React from "react";
import styled from "styled-components";
import { theme } from "../styles/styles.jsx";

const { colors, fontSizes, cardShadow } = theme;

const BlogContainer = styled.div`
  border-radius: 0px 40px 0px 0px;
  box-shadow: ${cardShadow};
  cursor: pointer;
  text-decoration: none;
  margin: 25px;
  max-width: 20rem;
  height: ;
`;

const BlogHeading = styled.div`
  color: ${colors.white};
  font-size: ${fontSizes.md};
  border-radius: 0px 40px 0px 0px;
  font-weight: 700;
  padding: 10px 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  background-color: rgba(153, 153, 153, 0.45);
`;

const BlogText = styled.a`
  font-size: ${fontSizes.sm};
  font-weight: 400;
  background-color: ${colors.grey};
  padding: 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  height: 100px;
  color: ${colors.black};

  &:hover,
  link {
    text-decoration: none;
    color: ${colors.black};
  }
`;

export default function BlogCard({ blog }) {
  return (
    <BlogContainer>
      <BlogHeading>{blog.title}</BlogHeading>
      <BlogText href={blog.url}>{blog.text}</BlogText>
    </BlogContainer>
  );
}
