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

export const StyledContainerEpisode = styled.span`
  display: flex;
  flex-direction: column;
`;

export const StyledTitleEpisode = styled.span`
  font-size: 30px;
  font-weight: 700;
  padding: 0px;
  margin-bottom: 10px;
`;

export const StyledDescriptionEpisode = styled.span`
  font-style: italic;
`;

export const StyledAudio = styled.div`
  margin-top: 20px;
  width: 100%;
  & audio {
    width: 100%;
  }
`;
