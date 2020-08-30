import "./App.css";

import React from "react";
import NavBar from "./components/navBar.jsx";
import IntroductionSection from "./components/introductionSection.jsx";
import StorySection from "./components/storySection.jsx";
import InitiativesSection from "./components/initiativesSection.jsx";
import EventsSection from "./components/eventsSection.jsx";
import BlogsSection from "./components/blogsSection.jsx";
import BoardMembersSection from "./components/boardmembersSection.jsx";
import GetInTouchSection from "./components/getInTouchSection.jsx";
import AboutUsSecton from "./components/aboutUsSection.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <IntroductionSection />
      <StorySection />
      <InitiativesSection />
      <EventsSection />
      <BlogsSection />
      <BoardMembersSection />
      <GetInTouchSection />
      <AboutUsSecton />
      <Footer />
    </React.Fragment>
  );
}

export default App;
