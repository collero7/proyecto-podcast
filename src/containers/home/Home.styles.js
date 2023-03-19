import styled from 'styled-components';

export const StyledPrimaryContainer = styled.div`
  text-align: center;
  padding: 10px 0px;
  height: 100%;
`;

export const StyledContainerSearch = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledSearch = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  & input {
    width: 100% !important;
  }
`;

export const StyledNumResultSearch = styled.span`
  background-color: ${({ theme }) => theme.color.blueText};
  color: ${({ theme }) => theme.color.whiteText};
  font-weight: 600;
  font-size: 20px;
  padding: 0px 10px;
  border-radius: 15px;
  margin-right: 10px;
`;

export const StyledContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 80%;
`;

export const StyledCard = styled.div`
  height: fit-content;
  cursor: pointer;
  .p-card {
    background-color: #f6f9fc;
  }
  .p-card:hover {
    background-color: #edf0f4;
  }
`;

export const StyledImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 150px;
  margin-bottom: 10px;
`;

export const StyledTittleAlbum = styled.p`
  font-weight: 700;
`;

export const StyledAuthor = styled.p`

`;