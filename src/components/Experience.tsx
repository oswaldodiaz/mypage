import React from "react";
import moment from "moment";

import { Container, Row, Col } from "reactstrap";
import { Media } from "reactstrap";

import { getData } from "../utils/dataExtractor";
import { Image } from "../utils/Image";

const getDuration = (duration: number) => {
  const years = Math.round(duration / 12);
  const months = duration > 12 ? duration % 12 : duration;
  return (
    (years > 0 ? years + " year" + (years > 1 ? "s" : "") + " and " : "") +
    (months > 0 ? months + " month" + (months > 1 ? "s" : "") : "")
  );
};

export const Experience = () => {
  const experiences = getData("experience");
  return (
    <Container>
      <h2>Experience</h2>
      <Row>
        <Col>
          {experiences.map(function (experience: any, i: number) {
            moment.locale("en");

            const totalDuration = experience.roles.reduce(function (
              cnt: any,
              role: any
            ) {
              const startDate = moment(role.startDate);
              const timeEnd = moment(
                role.currentJob ? new Date() : new Date(role.endDate)
              );
              const duration = moment.duration(timeEnd.diff(startDate));
              return Number(cnt) + Number(duration.asMonths().toPrecision(1));
            },
            0);

            return (
              <div key={i}>
                <Media>
                  <Media
                    left
                    top
                    href={experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      name={experience.logo}
                      alt={experience.companyName}
                    />
                  </Media>
                  <Media body>
                    <Media heading>
                      <a
                        href={experience.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {experience.companyName}
                      </a>
                      <span className="jobTotalDuration">
                        {getDuration(totalDuration)}
                      </span>
                    </Media>

                    {experience.roles.map(function (role: any, i: number) {
                      const startDate = moment(role.startDate);
                      const timeEnd = moment(
                        role.currentJob ? new Date() : new Date(role.endDate)
                      );
                      const duration = Number(
                        moment
                          .duration(timeEnd.diff(startDate))
                          .asMonths()
                          .toPrecision(1)
                      );

                      return (
                        <div key={i}>
                          <h5>{role.title}</h5>
                          <span className="jobDuration">
                            {startDate.format("MMM YYYY")} -{" "}
                            {role.currentJob
                              ? "Present"
                              : timeEnd.format("MMM YYYY")}{" "}
                            ({getDuration(duration)})
                          </span>
                          <span className="jobLocation">{role.location}</span>
                        </div>
                      );
                    })}
                  </Media>
                </Media>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
