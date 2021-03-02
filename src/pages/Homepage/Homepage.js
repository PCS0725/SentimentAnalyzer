import React from 'react';
import { withLayout } from '../../hoc/withLayout';
import { Container } from 'reactstrap';
import { HeroSection } from '../../components/HeroSection';
import { Team } from '../../components/Team/Team';

export const HomePage = withLayout(() => {
  return (
    <div>
      <HeroSection />
      <Team />
    </div>
  );
});
