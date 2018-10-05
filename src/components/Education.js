import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import moment from 'moment';
import profile from '../profile.json';

class Education extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.studies.map(function (study, i) {
            return <Media key={i}>
              <Media left top href={study.url}>
                <Media object src={study.logo} alt={study.institute}/>
              </Media>
              <Media body>
                <Media heading>
                  <a href={study.url}>{study.institute}</a>
                </Media>
                <Row>
                  <Col className="formLabel">Title:</Col>
                </Row>
                <Row>
                  <Col>{study.title}</Col>
                </Row>
                <Row>
                  <Col className="formLabel">Graduation Year:</Col>
                </Row>
                <Row>
                  <Col>{study.graduationYear}</Col>
                </Row>
                <Row>
                  <Col className="formLabel">Duration:</Col>
                </Row>
                <Row>
                  <Col>{study.durationInYears} year(s)</Col>
                </Row>
              </Media>
            </Media>
          })}
        </Col>
      </Row>
      <br/>
      <br/>
      <Row>
        <Col>
          <h4>Certifications:</h4>
          <hr/>
          {profile.certifications.map(function(certification, i) {
            const verification = certification.verificationLink?
              <Row>
                <Col>
                  <a className="certificateLink" href={certification.verificationLink}>See certificate</a>
                </Col>
              </Row> : "";
            return <Media key={i}>
              <Media left top href={certification.url}>
                <Media object src={certification.logo} alt={certification.title}/>
              </Media>
              <Media body>
                <Media heading>
                  <a href={certification.url}>{certification.title}</a>
                </Media>
                <Row>
                  <Col>{moment(certification.issueDate).format('MMM YYYY')} - {(certification.expiryDate)? moment(certification.expiryDate).format('MMM YYYY') : 'Present'}</Col>
                </Row>
                <Row>
                  <Col>{certification.issuer}</Col>
                </Row>
                {verification}
              </Media>
            </Media>
          })}
        </Col>
      </Row>
    </Container>
  }
}

export default Education;