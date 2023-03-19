import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
import ScrollTop from '@components/ui/scrollTop/ScrollTop';
import { Card } from 'primereact/card';
import { goUp } from '@utils/utilsFunctions';
import { PAGES } from '@routes/constants';


const DetailEpisode = ({ match, podcastDetailReducer }) => {

  const history = useHistory();
  const idEpisode = match.params.uid;
  const idPodcast = match.params.id;
  const [episodePodcast, setEpisodePodcast] = useState({});

  useEffect(() => {
    goUp();

    // Si no existe información del detalle en Redux, redireccionamos al detalle para su consulta. 
    if(!podcastDetailReducer) {
      history.push(PAGES.DETAIL.replace(':id', idPodcast), {id: idPodcast});
    } else {
      // Se busca el ID del podcast pasado en la url entre el listado de podcasts almacenados en Redux.
      let resultSearch = podcastDetailReducer?.filter((elem) => elem.trackId === parseInt(idEpisode));
  
      setEpisodePodcast(resultSearch[0]);
    }

  },[podcastDetailReducer]);


  return (
    <>
      <StyledPrimaryContainer>
        {podcastDetailReducer && (
          <StyledContainerLeft className="col-3">
            <TitlePodcast dataPodcast={podcastDetailReducer[0]}/>
          </StyledContainerLeft>
        )}
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
  () => ({})
)(DetailEpisode);