import React from 'react';
import { Container } from 'reactstrap';
import { TeamHeading } from '../Team/Team.styles';
import {
  HowWeDoItWrapper,
  TimeLineIconWrapper,
  TimeLineWrapper,
} from './HowWeDoIt.styles';
import { Timeline } from 'antd';
import { Item } from './Item';
import { Activity, BarChart2, Briefcase, Cpu, Download } from 'react-feather';

const timelineData = [
  {
    heading: 'Data Fetching',
    subData: 'We collect the data from you or fetch it from twitter for you.',
    dot: <Download />,
  },
  {
    heading: 'Data Cleaning\n',
    subData:
      'We remove the unnecessary text and stop words(not relevant to sentiment classification). The words are then tokenized and converted to their root forms(lemmas).',
    dot: <Activity />,
  },
  {
    heading: 'Word embeddings',
    subData:
      'You are asked to choose from various word embedding algorithms: Bag of words(weighed by tf-idf), word2vec, skip thoughts vectors, fastext, etc.',
    dot: <Briefcase />,
  },
  {
    heading: 'Classification',
    subData:
      'Choose from various classification algorithms like: Naive Bayes, Logistic regression, SVN or Neural Networks',
    dot: <Cpu />,
  },
  {
    heading: 'Results',
    subData:
      'We provide the results of classification in terms of accuracy, precision, recall and F1-Score. We provide insights into customer sentiments by providing percentage of positive and negative tweets, most frequent terms in pos/neg reviews, etc. You can download the results in pdf for use.',
    dot: <BarChart2 />,
  },
];
export const HowWeDoIt = () => (
  <HowWeDoItWrapper>
    <Container>
      <TeamHeading className="text-primary text-center">
        How Do we do it ?
      </TeamHeading>
      <TimeLineWrapper mode="alternate" className="d-none d-md-block">
        {timelineData.map((d) => (
          <Timeline.Item
            dot={<TimeLineIconWrapper>{d.dot}</TimeLineIconWrapper>}
          >
            <Item {...d} />
          </Timeline.Item>
        ))}
      </TimeLineWrapper>
      <TimeLineWrapper className="d-md-none">
        {timelineData.map((d) => (
          <Timeline.Item
            dot={<TimeLineIconWrapper>{d.dot}</TimeLineIconWrapper>}
          >
            <Item {...d} />
          </Timeline.Item>
        ))}
      </TimeLineWrapper>
    </Container>
  </HowWeDoItWrapper>
);
