import { Steps, Button, message } from 'antd';
import React, { useState } from 'react';
import { Col, Container, Input, Label, Row } from 'reactstrap';
import { FetchData } from './FetchData';
import { StepsWrapper } from './StepsComponent.styles';
import { feature_extraction_algo } from '../../constant_data/feature_extraction_algo';
import { classification_algos } from '../../constant_data/classification_algos';
import { BACKEND_URL } from '../../config';
const { Step } = Steps;

const SelectComponent = ({ list, heading, value, setValue }) => (
  <Row>
    <Col xs={12} md={{ size: 8, offset: 2 }}>
      <Label for="story" style={{ fontSize: '24px' }}>
        {heading}
      </Label>
      <Input
        type="select"
        name="story"
        id="story"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {list.map(({ text, value }, index) => (
          <option key={index} value={value}>
            {text}
          </option>
        ))}
      </Input>
    </Col>
  </Row>
);

export const StepsComponent = ({ setResult }) => {
  const [current, setCurrent] = React.useState(0);
  const [feature, setFeature] = React.useState('ngrams');
  const [classifier, setClassifier] = React.useState('nb');
  const [loading, setLoading] = useState(false);

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
          value={feature}
          setValue={setFeature}
        />
      ),
    },
    {
      title: 'Classification',
      content: (
        <SelectComponent
          list={classification_algos}
          heading={'Select Classification Algorithm'}
          value={classifier}
          setValue={setClassifier}
        />
      ),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const postDataToServer = () => {
    setLoading(true);
    fetch(`${BACKEND_URL}/classify`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ classifier, feature }),
    })
      .then((res) => res.json())
      .then((res) => {
        setResult(res);
        message.success('Request Fulfilled Successfully');
        setLoading(false);
        window.scrollTo(0, 400);
      })
      .catch((e) => {
        message.error(e.message);
        setLoading(false);
      });
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
                  disabled={loading}
                  type="primary"
                  onClick={() => postDataToServer()}
                >
                  {loading ? 'Request in Process' : 'Done'}
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
