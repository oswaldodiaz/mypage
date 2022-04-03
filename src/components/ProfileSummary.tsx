import React from "react";
import "./ProfileSummary.css";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { Image } from "../utils/Image";
import SocialIcons from "./SocialIcons";

export const ProfileSummary = () => {
  return (
    <Jumbotron>
      <Container className="profileSummary">
        <Row>
          <Col className="profileSummaryPicture" xs="3">
            <Image name="profilePic.png" alt="Oswaldo Diaz's profile picture" />
          </Col>
          <Col>
            <h1 className="display-3">Hello, I'm Oswaldo</h1>
            <p className="lead">
              I’m a 8+ years <strong>Software Engineer</strong>, with strong
              skills in backend development. I define myself as a quick learner,
              goal-oriented, and team worker. Since the beginning of 2018 I’ve
              been devoted to learning and working with AWS stack technologies,
              you can check my certifications below.
            </p>
            <p>
              <SocialIcons />
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};
