import styled from "styled-components";
import { display } from '@theme/sizes';

export const StyledLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledHead = styled.div`
  width: 100%;
  position: fixed;
  top:0;
  z-index: 2;
`;

export const StyledMain = styled.div`
  flex: 1 0 auto;
  margin-top: ${({ refHeight }) => refHeight > 0 ? `${refHeight}px` : '68px'};
  @media (max-width: ${display.tablet}) {
    margin-top: ${({ refHeight }) => refHeight > 0 ? `${refHeight}px` : '45px'};
  }
`;

export const StyledContainerBody = styled.div`
  display: flex;
  height: 100%;
  & > div {
    padding: 10px 10px;
  }
`;
