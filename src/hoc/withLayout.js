import React from 'react';
import { WithLayoutContainer } from './withLayout.styles';
import { NavbarComponent } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const withLayout = (WrappedComponent) => (props) => (
  <WithLayoutContainer>
    <NavbarComponent />
    <WrappedComponent />
    <Footer />
  </WithLayoutContainer>
);
