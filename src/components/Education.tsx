import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import { getData } from "../utils/dataExtractor";
import { Image } from "../utils/Image";

export const Education = () => {
  const education = getData("education");
  return (
    <Container>
      <h2>Education</h2>
      <Row>
        <Col>
          {education.studies.map(function (study: any, i: number) {
            return (
              <Media key={i}>
                <Media left top href={study.url}>
                  <Image name={study.logo} alt={study.title} />
                </Media>
                <Media body>
                  <Media heading>
                    <a href={study.url}>{study.institute}</a>
                  </Media>
                  {[
                    {
                      key: "Title",
                      value: study.title,
                    },
                    {
                      key: "Graduation Year",
                      value: study.graduationYear,
                    },
                    {
                      key: "Duration",
                      value: study.durationInYears + " year(s)",
                    },
                  ].map(function (object, i) {
                    return (
                      <div>
                        <Row>
                          <Col className="formLabel">{object.key}:</Col>
                        </Row>
                        <Row>
                          <Col>{object.value}</Col>
                        </Row>
                      </div>
                    );
                  })}
                </Media>
              </Media>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
