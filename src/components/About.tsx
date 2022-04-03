import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import { Image } from "../utils/Image";

const images: any = [
  {
    link: "https://reactjs.org/",
    alt: "React",
    logo: "react.png",
  },
  {
    link: "https://reactstrap.github.io/",
    alt: "reactstrap",
    logo: "reactstrap.png",
  },
  {
    link: "https://fontawesome.com/",
    alt: "Font Awesome",
    logo: "fontAwesome.png",
  },
  {
    link: "http://momentjs.com/",
    alt: "Moment.js",
    logo: "moment.png",
  },
  {
    link: "https://github.com/ReactTraining/react-router",
    alt: "react-router",
    logo: "reactRouter.png",
  },
  {
    link: "https://www.typescriptlang.org/",
    alt: "TypeScript",
    logo: "typeScript.png",
  },
];

export const About = () => (
  <Container>
    <br />
    <hr />
    <br />
    <Row>
      <Col>
        <span>
          This site is deployed as a static website in S3 and was built with the
          following technologies:
        </span>
      </Col>
    </Row>
    <Row className="about">
      {images.map(function (image: any, i: number) {
        return (
          <Col xs={2} md={2} key={i}>
            <Row className="aboutImage">
              <Media key={i}>
                <Media middle href={image.link}>
                  <Image name={image.logo} alt={image.alt} />
                </Media>
              </Media>
            </Row>
            <Row className="aboutTitle">
              <Col xs={1.5} md={1.5}>
                <strong>{image.alt}</strong>
              </Col>
            </Row>
          </Col>
        );
      })}
    </Row>

    <br />
    <Row>
      <Col>
        <p>
          The code can be found on my personal{" "}
          <a href="https://github.com/oswaldodiaz/mypage">Github</a> account.
        </p>
      </Col>
    </Row>
  </Container>
);
