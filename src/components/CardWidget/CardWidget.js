import React from 'react';
import {
  CardWidgetDescription,
  CardWidgetHeading,
  CardWidgetWrapper,
} from './CardWidget.styles';
import { Col, Container, Row } from 'reactstrap';
import { CardItem } from './CardItem';

export const CardWidget = ({ list, heading, description }) => (
  <CardWidgetWrapper>
    <Container>
      <Row>
        {' '}
        <CardWidgetHeading>{heading}</CardWidgetHeading>
      </Row>
      <Row>
        <Col sm={12} md={{ size: 8, offset: 2 }}>
          <CardWidgetDescription>{description}</CardWidgetDescription>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={{ size: 8, offset: 2 }}>
          <Row className="justify-content-center" sm={1} md={2}>
            {list.map((l) => (
              <Col>
                <CardItem {...l} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  </CardWidgetWrapper>
);
