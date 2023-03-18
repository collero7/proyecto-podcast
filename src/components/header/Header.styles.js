import styled from "styled-components";
import { display } from '@theme/sizes';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0.25rem;
  background: ${({ theme }) => theme.color.whiteMenu};
  height: 68px;
  border: 1px solid ${({ theme }) => theme.color.graySeparator};
`;

export const StyledNav = styled.nav`
  padding-left: 0px;
  padding-right: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${display.mobile}) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const StyledLeftContent = styled.div`
  display: flex;
  margin-left: 1.5rem;
  @media (max-width: ${display.mobile}) {
    padding-bottom: 1rem;
  }
`;

export const StyledHeaderTitle = styled.h4`
  font-weight: 600;
  margin-left: 2%;
  color: ${({ theme }) => theme.color.blueText};
`;