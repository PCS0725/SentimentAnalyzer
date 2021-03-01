import React from 'react';
import { WithLayoutContainer } from './withLayout.styles';
import { NavbarComponent } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const withLayout = (props) => (
  <WithLayoutContainer>
    <NavbarComponent />
    {props.children}
    <Footer />
  </WithLayoutContainer>
);
