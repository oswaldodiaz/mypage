import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import moment from "moment";
import { getData } from "../utils/dataExtractor";
import { Image } from "../utils/Image";

export const Posts = () => {
  const posts = getData("posts");
  return (
    <Container>
      <h2>Posts</h2>
      <Row>
        <Col>
          {posts.map(function (post: any, i: number) {
            moment.locale("en");
            return (
              <div key={i}>
                <Media key={i}>
                  <Media left top href={post.url}>
                    <Image name={post.path} alt={post.title} />
                  </Media>
                  <Media body>
                    <Media heading>
                      <a href={post.url}>{post.title}</a>
                      <span className="jobTotalDuration">
                        {moment(post.date).format("YYYY, MMM Do")}
                      </span>
                    </Media>
                    {post.description}
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
