import "./App.css";

import React, { Component } from "react";

import AboutUsSecton from "./components/aboutUsSection.jsx";
import BlogsSection from "./components/blogsSection.jsx";
import BoardMembersSection from "./components/boardmembersSection.jsx";
import EventsSection from "./components/eventsSection.jsx";
import Footer from "./components/footer.jsx";
import GetInTouchSection from "./components/getInTouchSection.jsx";
import InitiativesSection from "./components/initiativesSection.jsx";
import IntroductionSection from "./components/introductionSection.jsx";
import NavBar from "./components/navBar.jsx";
import PageLoader from "./components/loader.jsx";
import StorySection from "./components/storySection.jsx";

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <PageLoader />
        ) : (
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
        )}
      </React.Fragment>
    );
  }
}

export default App;
