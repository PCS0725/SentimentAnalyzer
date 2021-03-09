import React, { useState } from 'react';
import { withLayout } from '../../hoc/withLayout';
import { StepsComponent } from '../../components/StepsComponent/StepsComponent';
import {
  Clock,
  MapPin,
  Activity,
  Cpu,
  Database,
  Layers,
  BarChart2,
} from 'react-feather';
import { CardWidget } from '../../components/CardWidget';
import { Result } from '../../components/Result';
const cardData = [
  {
    logo: <MapPin />,
    heading: 'Bag of words',
    subheading:
      'A text vectorization algorithm which uses count-vectors. Normalized using Tf-IDF',
    link: 'http://prachandd.bss.design/algos.html#',
  },
  {
    logo: <Clock />,
    heading: 'Word2Vec',
    subheading:
      'A neural network based word embedding generator by Google',
    link: 'http://prachandd.bss.design/algos.html#',
  },
  {
    logo: <Activity />,
    heading: 'Skip Thoughts',
    subheading:
      'Sentence vectorization algorithm based on Word2Vec',
    link: 'http://prachandd.bss.design/algos.html#',
  },
];
const cardData2 = [
  {
    logo: <Cpu />,
    heading: 'Naive Bayes',
    subheading:
      'Supervised classification algorithm based on bayes theorem of conditional probability',
    link: 'http://prachandd.bss.design/algos.html#',
  },
  {
    logo: <Database />,
    heading: 'Logistic Regression',
    subheading:
      'Supervised learning classification algorithm used to predict the probability of a target variable',
    link: 'http://prachandd.bss.design/algos.html#',
  },
  {
    logo: <BarChart2 />,
    heading: 'Rule based sentiment classification',
    subheading:
      'Uses semantic orientation and intensity of a word to calculate polarity score.',
    link: 'http://prachandd.bss.design/algos.html#',
  },
  {
    logo: <Layers />,
    heading: 'Support Vector Machine',
    subheading:
      'Maximum margin classifier',
    link: 'http://prachandd.bss.design/algos.html#',
  },
];

export const Process = withLayout(() => {
  const [result, setResult] = useState(null);
  return (
    <div>
      <StepsComponent setResult={(result) => setResult(result)} />
      {result && <Result result={result} />}
      <CardWidget
        heading="Word Embeddings"
        list={cardData}
        description="Text vectorization is the process of converting text into numerical vectors. These vectors
        can be fed into Machine Learning models for classification/topic modelling, etc. "
      />
      <CardWidget
        heading="Classification algorithms"
        list={cardData2}
        description="Classification algorithms classify text into sentiment or topic classes. Rule based algorithms
        use pre-defined dictionaries of positive and negative words to calculate polarity. Machine learning 
        based algorithms used supervised classification algorithms to learn how to classify text."
      />
    </div>
  );
});
