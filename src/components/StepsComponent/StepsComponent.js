import { Steps, Button, message } from 'antd';
import React from 'react';
import { Col, Container, Input, Label, Row } from 'reactstrap';
import { FetchData } from './FetchData';
import { StepsWrapper } from './StepsComponent.styles';
import { feature_extraction_algo } from '../../constant_data/feature_extraction_algo';
import { classification_algos } from '../../constant_data/classification_algos';
const { Step } = Steps;

const SelectComponent = ({ list, heading }) => (
  <Row>
    <Col xs={12} md={{ size: 8, offset: 2 }}>
      <Label for="story" style={{ fontSize: '24px' }}>
        {heading}
      </Label>
      <Input type="select" name="story" id="story">
        {list.map((value, index) => (
          <option key={index}>{value}</option>
        ))}
      </Input>
    </Col>
  </Row>
);
const stepsComponent = [
  {
    title: 'Fetch Data',
    content: <FetchData />,
  },
  {
    title: 'Feature Extraction',
    content: (
      <SelectComponent
        list={feature_extraction_algo}
        heading={'Select Feature Extraction Algorithm'}
      />
    ),
  },
  {
    title: 'Classification',
    content: (
      <SelectComponent
        list={classification_algos}
        heading={'Select Classification Algorithm'}
      />
    ),
  },
];

export const StepsComponent = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <StepsWrapper>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <Steps current={current}>
              {stepsComponent.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">
              {stepsComponent[current].content}
            </div>
            <div className="steps-action">
              {current < stepsComponent.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === stepsComponent.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success('Processing complete!')}
                >
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </StepsWrapper>
  );
};
