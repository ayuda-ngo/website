import { Section, media, mixins, theme } from "../styles/styles.jsx";

import BlogCard from "../templates/blogCard.jsx";
import { Fade } from "react-reveal";
import React from "react";
import { blogSection } from "../information.js";
import styled from "styled-components";

const { colors } = theme;

const BlogsMain = styled.div`
  flex: 1;
  margin-bottom: 30px;
`;

const BlogsBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${media.tablet`
  ${mixins.scrollbar};
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
  color: ${colors.white};
`;

export default function BlogSection() {
  return (
    <BlogSectionWrappper id="blogs">
      <BlogsContainer>
        <Fade bottom distance="40px">
          <div className="blog-header p-3">
            <h1 className="heading">{blogSection.title}</h1>
            <p className="subTitle">{blogSection.subtitle}</p>
          </div>
        </Fade>
      </BlogsContainer>

      <BlogsMain>
        <BlogsBody>
          {blogSection.blogs.map((blog, i) => {
            return (
              <Fade bottom delay={150 * i} distance="20px">
                <BlogCard key={blog.id} cardInfo={blog} />
              </Fade>
            );
          })}
        </BlogsBody>
      </BlogsMain>
    </BlogSectionWrappper>
  );
}
