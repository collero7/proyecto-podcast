import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { 
  StyledPrimaryContainer,
  StyledContainerLeft,
  StyledContainerRight,
  StyledContainerEpisode,
  StyledTitleEpisode,
  StyledDescriptionEpisode,
  StyledAudio
} from "./DetailEpisode.styles";
import TitlePodcast from '@components/titlePodcast/TitlePodcast';
import { Card } from 'primereact/card';
import ScrollTop from '@components/ui/scrollTop/ScrollTop';
import { goUp } from '@utils/utilsFunctions';


const DetailEpisode = ({ match, podcastDetailReducer }) => {

  const idEpisode = match.params.uid;
  const [episodePodcast, setEpisodePodcast] = useState({});

  useEffect(() => {
    let resultSearch = podcastDetailReducer?.filter((elem) => elem.trackId === parseInt(idEpisode));
    setEpisodePodcast(resultSearch[0]);
    goUp();
  },[podcastDetailReducer]);


  return (
    <>
      <StyledPrimaryContainer>
        <StyledContainerLeft className="col-3">
          <TitlePodcast dataPodcast={podcastDetailReducer[0]}/>
        </StyledContainerLeft>
        <StyledContainerRight className="col-9">
          <Card style={{ margin: '1em' }}>
            <StyledContainerEpisode>
              <StyledTitleEpisode>{episodePodcast?.trackName}</StyledTitleEpisode>
              <StyledDescriptionEpisode>{episodePodcast?.description}</StyledDescriptionEpisode>
              {episodePodcast?.episodeUrl && (
                <StyledAudio>
                  <audio controlsList="nodownload" controls>
                  <source src={episodePodcast?.episodeUrl} type="audio/mpeg" />
                  </audio>
                </StyledAudio>
              )}
            </StyledContainerEpisode>
          </Card>
        </StyledContainerRight>
      </StyledPrimaryContainer>
      <ScrollTop />
    </>
  );
}
export default connect(
  (state) => ({
    podcastDetailReducer: state.podcastDetail.data
  }),
  (dispatch) => ({})
)(DetailEpisode);