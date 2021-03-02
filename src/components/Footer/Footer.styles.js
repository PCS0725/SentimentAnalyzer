import styled from 'styled-components';
import { colors } from '../../colors';
export const FooterWrapper = styled('div')`
  background-color: ${colors.footer_background};
  padding: 15px 0 0 0;
  margin-top: 20px;
  color: white !important;
  h3 {
    color: white;
  }
  p {
    color: #d3d3d3;
    font-size: 16px;
  }
  a,
  a:hover,
  a:visited {
    color: white !important;
    font-size: 20px;
  }
  .row {
    @media (max-width: 600px) {
      display: flex;
      justify-content: center;
    }
  }
`;
