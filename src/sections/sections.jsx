import React from "react";

// import AboutUsSecton from "./aboutUs/aboutUsSection.jsx";
// import BlogSection from "./blog/blogSection.jsx";
// import CarouselSection from "./carousel/carouselSection.jsx";
// import EventsSection from "./events/eventsSection.jsx";
// import GetInTouchSection from "./getInTouch/getInTouchSection.jsx";
// import InitiativesSection from "../components/initiativesSection.jsx";

import NavBar from "../components/navBar.jsx";
import StorySection from "../components/storySection.jsx";
import BlogsSection from "../components/blogsSection.jsx";
import BoardMembersSection from "../components/boardmembersSection.jsx";
import GetInTouchSection from "../components/getInTouchSection.jsx";
import AboutUsSecton from "../components/aboutUsSection.jsx";
import Footer from "../components/footer.jsx";

export default function Sections() {
  return (
    <React.Fragment>
      <NavBar />
      <StorySection />
      <BlogsSection />
      <BoardMembersSection />
      <GetInTouchSection />
      <AboutUsSecton />
      <Footer />
    </React.Fragment>
  );
}
