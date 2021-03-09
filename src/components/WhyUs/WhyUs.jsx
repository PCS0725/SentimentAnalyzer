import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { TeamHeading } from '../Team/Team.styles';
import {
  BarChart,
  Database,
  Download,
  FastForward,
  Shuffle,
} from 'react-feather';
import { ItemHeading, ItemSubData } from '../HowWeDoIt/Item/Item.styles';
import { WhyUsIconWrapper } from './WhyUs.styles';
const whyUsData = [
  {
    icon: <Shuffle />,
    heading: 'Flexibility',
    subheading: 'Upload your csv or fetch from twitter',
  },
  {
    icon: <Database />,
    heading: 'Independence',
    subheading: 'Choose your own algorithms',
  },
  {
    icon: <FastForward />,
    heading: 'Speed',
    subheading: 'Optimized, pre-trained models',
  },
  {
    icon: <BarChart />,
    heading: 'Insights',
    subheading: 'Charts and easy visualizations',
  },
];
export const WhyUs = () => (
  <Container style={{ marginBottom: '50px', marginTop: '50px' }}>
    <Row>
      <TeamHeading className="text-primary text-center mb-5">
        Why Us ?
      </TeamHeading>
    </Row>
    <Row>
      <Col xs={12} md={8}>
        <Row xs={1} md={2}>
          {whyUsData.map((d) => (
            <div className="mb-5 d-flex flex-column align-items-center">
              <WhyUsIconWrapper className="text-primary">
                {d.icon}
              </WhyUsIconWrapper>
              <ItemHeading>{d.heading}</ItemHeading>
              <ItemSubData className="text-secondary">
                {d.subheading}
              </ItemSubData>
            </div>
          ))}
        </Row>
      </Col>
      <Col xs={12} md={4} className="text-center mt-xs-5 mt-md-0">
        <img
          alt="feature.png"
          src="/features.png"
          style={{ height: 'auto', width: '250px' }}
        />
      </Col>
    </Row>
  </Container>
);
