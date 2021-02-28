import styled from 'styled-components';
import { colors } from '../../colors';
export const FooterWrapper = styled('div')`
  background-color: ${colors.footer_background};
  color: white;
  p {
    color: ${colors.secondary_font};
    text-align: center;
  }
  @include media-breakpoint-up(md) {
    p {
      text-align: left;
    }
  }
`;
