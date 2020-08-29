import BlogCard from "../templates/blogCard.jsx";
import { blogSection } from "../information.js";
import React from "react";
import styled from "styled-components";
import { Section, media } from "../styles/styles.jsx";

const BlogsMain = styled.div`
  flex: 1;
  margin-bottom: 30px;
`;

const BlogsBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${media.tablet`
  flex-direction: column;
  overflow-x: scroll;
  height:250px;
  `};
`;

const BlogsContainer = styled.div`
  display: flex;
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
`;

const BlogSectionWrappper = styled(Section)`
  position: relative;
`;

export default function BlogSection() {
  return (
    <BlogSectionWrappper id="blogs">
      <BlogsContainer>
        <div className="blog-header p-3">
          <h1 className="heading">{blogSection.title}</h1>
          <p className="subTitle">{blogSection.subtitle}</p>
        </div>
      </BlogsContainer>
      <BlogsMain>
        <BlogsBody>
          {blogSection.blogs.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                blog={{
                  url: blog.url,
                  title: blog.title,
                  text: blog.text,
                }}
              />
            );
          })}
        </BlogsBody>
      </BlogsMain>
    </BlogSectionWrappper>
  );
}
