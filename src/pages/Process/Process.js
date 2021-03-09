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
      'Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.',
    link: 'http://prachandd.bss.design/algos.html#',
  },
  {
    logo: <Clock />,
    heading: 'Word2Vec',
    subheading:
      'Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.',
    link: 'http://prachandd.bss.design/algos.html#',
  },
  {
    logo: <Activity />,
    heading: 'Skip Thoughts',
    subheading:
      'Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.',
    link: 'http://prachandd.bss.design/algos.html#',
  },
];
const cardData2 = [
  {
    logo: <Cpu />,
    heading: 'Naive Bayes',
    subheading:
      'Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.',
    link: 'http://prachandd.bss.design/algos.html#',
  },
  {
    logo: <Database />,
    heading: 'Logistic Regression',
    subheading:
      'Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.',
    link: 'http://prachandd.bss.design/algos.html#',
  },
  {
    logo: <BarChart2 />,
    heading: 'Neural Network',
    subheading:
      'Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.',
    link: 'http://prachandd.bss.design/algos.html#',
  },
  {
    logo: <Layers />,
    heading: 'Support Machine Vector',
    subheading:
      'Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.',
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
        description="Definition, reference to paper and their significance in sentiment finding."
      />
      <CardWidget
        heading="Classification algorithms"
        list={cardData2}
        description="What is best classification algorithm for classification of text, reference, supervised/unsupervised and their significance in sentiment finding."
      />
    </div>
  );
});
