import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Circle } from 'react-feather';
import { CircleWrapper, DataWrapper } from './Result.styles';
import { TableComponent } from './Table';

export const Result = (props) => (
  <div style={{ marginBottom: '140px', marginTop: '50px' }}>
    <Container>
      <Row className="justify-content-center text-black-50">
        <h1>Metrics</h1>
      </Row>
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#ffc107 !important'}>
            {' '}
            <Circle />
            <DataWrapper>
              {props?.result?.metrics?.precison.toFixed(0)}%
            </DataWrapper>
          </CircleWrapper>
          <h3 className="text-secondary" style={{ marginTop: '70px' }}>
            Precision
          </h3>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#0dcaf0 !important'}>
            {' '}
            <Circle />
            <DataWrapper>
              {props?.result?.metrics?.accuracy.toFixed(0)}%
            </DataWrapper>
          </CircleWrapper>
          <h3 className="text-secondary" style={{ marginTop: '70px' }}>
            Accuracy
          </h3>
        </Col>

        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#198754 !important'}>
            {' '}
            <Circle />
            <DataWrapper>
              {props?.result?.metrics['F1-Score'].toFixed(0)}%
            </DataWrapper>
          </CircleWrapper>
          <h3 className="text-secondary" style={{ marginTop: '70px' }}>
            F1 Score
          </h3>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#dc3545 !important'}>
            {' '}
            <Circle />
            <DataWrapper>
              {props?.result?.metrics?.recall.toFixed(0)}%
            </DataWrapper>
          </CircleWrapper>
          <h3 className="text-secondary" style={{ marginTop: '70px' }}>
            Recall
          </h3>
        </Col>
      </Row>
      <Row
        style={{ marginTop: '50px' }}
        className="justify-content-center text-black-50"
      >
        <h1>Insights</h1>
      </Row>
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#0dcaf0 !important'}>
            {' '}
            <Circle />
            <DataWrapper>
              {props?.result?.insights?.total.toFixed(0)}
            </DataWrapper>
          </CircleWrapper>
          <h3 className="text-secondary" style={{ marginTop: '70px' }}>
            Total
          </h3>
        </Col>
        {/*<Col className="d-flex flex-column align-items-center">*/}
        {/*  <CircleWrapper fill={'#dc3545 !important'}>*/}
        {/*    {' '}*/}
        {/*    <Circle />*/}
        {/*    <DataWrapper>*/}
        {/*      {props?.result?.insights?.total_neg.toFixed(0)}*/}
        {/*    </DataWrapper>*/}
        {/*  </CircleWrapper>*/}
        {/*  <h3 className="text-secondary" style={{ marginTop: '70px' }}>*/}
        {/*    Total Negative*/}
        {/*  </h3>*/}
        {/*</Col>*/}
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#ffc107 !important'}>
            {' '}
            <Circle />
            <DataWrapper>
              {props?.result?.insights?.total_neut.toFixed(0)}
            </DataWrapper>
          </CircleWrapper>
          <h3 className="text-secondary" style={{ marginTop: '70px' }}>
            Total Neutral
          </h3>
        </Col>{' '}
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#dc3545 !important'}>
            {' '}
            <Circle />
            <DataWrapper>
              {props?.result?.insights?.total_neg.toFixed(1)}
            </DataWrapper>
          </CircleWrapper>
          <h3 className="text-secondary" style={{ marginTop: '70px' }}>
            Total Negative
          </h3>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#198754 !important'}>
            {' '}
            <Circle />
            <DataWrapper>
              {props?.result?.insights?.total_pos.toFixed(0)}
            </DataWrapper>
          </CircleWrapper>
          <h3 className="text-secondary" style={{ marginTop: '70px' }}>
            Total Positive
          </h3>
        </Col>
      </Row>
      <Row xs={1} md={3} className="justify-content-center">
        <Col>
          <TableComponent
            heading="Total Negative"
            list={props?.result?.insights?.top_neg}
          />
        </Col>
        <Col>
          <TableComponent
            heading="Total Positive"
            list={props?.result?.insights?.top_pos}
          />
        </Col>
        <Col>
          <TableComponent
            heading="Total Neutral"
            list={props?.result?.insights?.top_neut}
          />
        </Col>
      </Row>
    </Container>
  </div>
);
