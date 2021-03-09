import styled from 'styled-components';
import { colors } from '../../../colors';

export const ItemWrapper = styled('div')`
  text-align: left;
  :not(:last-child) {
    padding: 0 0 30px 0;
  }
  :nth-child(odd) {
    margin-left: 30px;
  }
`;

export const ItemHeading = styled('h3')`
  color: ${colors.black_font};
`;

export const ItemSubData = styled('p')`
  color: ${colors.black_font};
  font-size: 18px;
`;
