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
    alt: "Reactstrap",
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
    alt: "React-router",
    logo: "reactRouter.png",
  },
  {
    link: "https://www.typescriptlang.org/",
    alt: "TypeScript",
    logo: "typeScript.png",
  },
];

export const About = () => (
  <Container className="about">
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
    <Row>
      <Col>
        {images.map(function (image: any, i: number) {
          return (
            // <Col xs={2} md={2} key={i}>
            <Row className="aboutImage">
              <Col>
                <Image name={image.logo} alt={image.alt} />
                <strong>{image.alt}</strong>
              </Col>
            </Row>
            // </Col>
          );
        })}
      </Col>
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
