import styled from 'styled-components';
import { display, pxSizes } from '@theme/sizes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledContainerText = styled.div`
  text-align: center;
  padding: 30px 20px;
  span {
    font-size: ${pxSizes.px_30};
  }
  @media (min-width: ${display.tablet}) {
    span {
      font-size: ${pxSizes.px_35};
    }
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  color: ${({ theme }) => theme.color.redDark};
  @media (min-width: ${display.tablet}) {
    margin-right: 12px;
  }
`;