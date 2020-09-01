import React from "react";
import styled from "styled-components";
import { theme } from "../styles/styles.jsx";

const { colors, fontSizes } = theme;

const BlogContainer = styled.div`
  border-radius: 0px 40px 0px 0px;
  background-color: rgba(3, 17, 26, 0.8);
  border: 1px solid black;
  cursor: pointer;
  text-decoration: none;
  margin: 25px;
  max-width: 220px;
`;

const BlogHeading = styled.div`
  color: ${colors.white};
  font-size: ${fontSizes.sm};
  border-radius: 0px 40px 0px 0px;
  font-weight: 700;
  padding: 10px 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  background-color: rgba(80, 80, 80, 0.45);
`;

const BlogText = styled.a`
  font-size: ${fontSizes.xs};
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
