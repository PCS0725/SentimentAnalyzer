import styled from 'styled-components';
import { colors } from '../../../colors';

export const CardItemWrapper = styled('div')`
  cursor: pointer;
  :hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
  padding: 20px 30px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid #d3d3d3;
  background-color: white;
  border-radius: 8px;
  margin: 20px 0 0 0;
`;
export const CardItemLogoWrapper = styled('div')`
  > svg {
    height: auto;
    width: 70px;
  }
`;
export const CardItemHeading = styled('div')`
  margin: 10px 0;
  color: ${colors.black_font};
  font-size: 24px;
`;

export const CardItemSubData = styled('div')`
  color: #7d8285;
  font-weight: normal;
  text-align: left;
  font-size: 20px;
`;
