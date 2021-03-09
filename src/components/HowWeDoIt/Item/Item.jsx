import React from 'react';
import { ItemHeading, ItemSubData, ItemWrapper } from './Item.styles';

export const Item = ({ heading, subData }) => (
  <ItemWrapper>
    <ItemHeading>{heading}</ItemHeading>
    <ItemSubData className="text-secondary">{subData}</ItemSubData>
  </ItemWrapper>
);
