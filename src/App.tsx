import React from "react";
import "./App.css";

import { Container, Row } from "reactstrap";

import { About } from "./components/About";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Posts } from "./components/Posts";
import { ProfileSummary } from "./components/ProfileSummary";
import { TopBar } from "./components/TopBar";

export const App = () => {
  return (
    <div className="App">
      <TopBar />
      <ProfileSummary />
      <Container>
        <Row>
          <Certifications />
        </Row>
        <Row>
          <Posts />
        </Row>
        <Row>
          <Experience />
        </Row>
        <Row>
          <Education />
        </Row>
        <Row>
          <About />
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
