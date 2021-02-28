import React from 'react';
import { FooterWrapper } from './Footer.styles';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-feather';

const footerLinks = [
  { text: 'About us', link: '/' },
  { text: 'Project', link: '/project' },
  { text: 'Support', link: '/support' },
];
export const Footer = React.memo((props) => (
  <FooterWrapper>
    <Container>
      <Row>
        <Col
          xs="12"
          md="4"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <h3>Sentiment Analyzer</h3>
          <p>
            Built as a final year project under the mentorship of Dr Avtar
            Singh, NITJ. This software is provided under the creative commons
            license. Provide necessary attributes.
          </p>
        </Col>
        <Col xs="6" md="4">
          <img alt="heart image" src="/heart.webp" />
        </Col>
        <Col xs="6" md="4" className="d-flex flex-column">
          {footerLinks.map(({ link, text }) => (
            <Link to={link}>{text}</Link>
          ))}
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <p style={{ textAlign: 'center' }}>
            {' '}
            &copy; Sentiment Analyzer 2021 Ltd.
          </p>
        </Col>
      </Row>
    </Container>
  </FooterWrapper>
));
