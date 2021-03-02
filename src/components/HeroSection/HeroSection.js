import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const HeroSection = (props) => {
  return (
    <div>
      <Jumbotron
        style={{
          background: '#0029ba',
        }}
      >
        <h1 className="display-4 text-center text-white">
          Welcome to Sentiment Analyzer
        </h1>
        <p className="text-center text-white" style={{ fontSize: '20px' }}>
          Find Out What Customers are thinking about you
        </p>

        <p className="lead text-center">
          <Link to="/process">
            <Button color="primary" size="lg">
              Start Now
            </Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
};
