import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export const HeroSection = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to Sentiment Analyzer</h1>
        <p className="lead">Find Out What Customers are thinking about you</p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Start Now</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
