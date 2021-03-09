import React from 'react';
import { withLayout } from '../../hoc/withLayout';
import { HeroSection } from '../../components/HeroSection';
import { Team } from '../../components/Team/Team';
import { HowWeDoIt } from '../../components/HowWeDoIt';
import { WhyUs } from '../../components/WhyUs';

export const HomePage = withLayout(() => {
  return (
    <div>
      <HeroSection />
      <WhyUs />
      <HowWeDoIt />
      <Team />
    </div>
  );
});
