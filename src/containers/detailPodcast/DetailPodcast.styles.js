import styled from 'styled-components';


export const StyledPrimaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 0px;
`;

export const StyledContainerLeft = styled.div`

`;

export const StyledContainerRight = styled.div`
  .p-card-content {
    padding: 0px !important;
  }
`;

export const StyledTitleDetail = styled.span`
  font-size: 27px;
  font-weight: 700;
  padding: 0px;
`;

export const StyledTitleTable = styled.span`
  color: ${({ theme }) => theme.color.blueText};
  cursor: pointer;
  :hover {
    text-decoration: underline !important;
  }
`;