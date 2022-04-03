import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import moment from "moment";
import { getData } from "../utils/dataExtractor";
import { Image } from "../utils/Image";

export const Certifications = () => {
  const education = getData("education");
  return (
    <Container>
      <h2>Certifications</h2>
      <Row>
        {education.certifications.map(function (certification: any, i: number) {
          return (
            <Col>
              <Media key={i}>
                <Media left top href={certification.verificationLink}>
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
