import React from 'react';
import { FooterWrapper } from './Footer.styles';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const footerLinks = [
  { text: 'About us', link: '/' },
  { text: 'Project', link: '/project' },
  { text: 'Support', link: '/support' },
];
export const Footer = React.memo((props) => (
  <FooterWrapper>
    <Container>
      <Row className="row">
        <Col xs="6" md="3">
          <div className="d-flex mt-3 mb-3 flex-column align-items-center">
            {footerLinks.map(({ link, text }) => (
              <Link to={link}>{text}</Link>
            ))}
          </div>
        </Col>
        <Col
          xs="12"
          md="6"
          style={{ display: 'flex', flexDirection: 'column' }}
          className="text-center text-md-left"
        >
          <h3>Sentiment Analyzer</h3>
          <p>
            Built as a final year project under the mentorship of Dr Avtar
            Singh, NITJ. This software is provided under the creative commons
            license. Provide necessary attributes.
          </p>
        </Col>
        <Col xs="6" md="3">
          <img alt="heart image" src="/heart.webp" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-3">
          <p> &copy; Sentiment Analyzer 2021 Ltd.</p>
        </Col>
      </Row>
    </Container>
  </FooterWrapper>
));
