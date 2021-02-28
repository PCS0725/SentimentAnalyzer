import React from 'react';
import { WithLayoutContainer } from './withLayout.styles';
import { Navbar } from '../components/Navbar';

export const withLayout = (props) => (
  <WithLayoutContainer>
    <Navbar />
    {props.children}
    <Footer />
  </WithLayoutContainer>
);
