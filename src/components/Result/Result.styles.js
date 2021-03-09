import styled from 'styled-components';

export const CircleWrapper = styled('div')`
  > svg {
    height: auto;
    width: 100%;
    stroke-width: 0;
    fill: ${({ fill }) => fill};
  }
`;

export const DataWrapper = styled('h2')`
  margin-top: -150px;
  margin-left: 90px;
  font-size: 36px;
  color: white;
`;
