import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import { getData } from "../utils/dataExtractor";
import { Image } from "../utils/Image";

export const Certifications = () => {
  const education = getData("education");
  return (
    <Container className="certifications">
      <h2>Certifications</h2>
      <Row>
        {education.certifications.map(function (certification: any, i: number) {
          return (
            <Col key={i} xs={2} md={2}>
              <Media key={i}>
                <Media
                  left
                  top
                  href={certification.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image name={certification.logo} alt={certification.title} />
                </Media>
              </Media>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
