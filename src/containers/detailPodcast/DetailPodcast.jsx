import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { resultPodcastDetailRequest as resultPodcastDetailRequestReducer } from '@store/reducers/podcastDetailReducer';
import { 
  StyledPrimaryContainer,
  StyledContainerLeft,
  StyledContainerRight,
  StyledTitleDetail,
  StyledTitleTable
} from "./DetailPodcast.styles";
import useFullPageLoader from '@hooks/useFullPageLoader';
import { getDetailPodcast } from '@services/axios_service/api';
import TitlePodcast from '@components/titlePodcast/TitlePodcast';
import ScrollTop from '@components/ui/scrollTop/ScrollTop';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { PAGES } from '@routes/constants';
import { getFormatDate, milisecondssToMinutesYSeconds, goUp } from '@utils/utilsFunctions';

const fetchRequestGetDetailPodcast = (_id) => {
  return getDetailPodcast(_id).then((response) => {
    return response.data;
  })
}

const DetailPodcast = ({ match, podcastDetailReducer, resultPodcastDetailRequest }) => {

  const history = useHistory();
  const idPodcast = match.params.id;
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [detailPodcast, setDetailPodcast] = useState(podcastDetailReducer ? podcastDetailReducer : []);

  useEffect(() => {
    goUp();
    // Se verifica si tenemos datos almacenados en el Storage de redux, se consulta si hemos superado 
    // la fecha de 1 día y se verifica si el Id del podcast es diferente al ID del podcast pasado por la url.
    // Si no se cumple alguna de las condiciones anteriores, se vuelve a realizar una llamada al servicio para
    // obtener el detalle del podcast.
    if(!podcastDetailReducer || podcastDetailReducer[0]?.collectionId !== parseInt(idPodcast) || (new Date(parseInt(sessionStorage.getItem('dateFetchDetailPodcast'))) <= new Date())) {
      getRequestGetDetailPodcast();
    }
  },[]);

  const getRequestGetDetailPodcast = () => {
    showLoader();
    fetchRequestGetDetailPodcast(idPodcast).then((resp) => {
      setDetailPodcast(resp.results);
      resultPodcastDetailRequest(resp.results);

      //Se almacena la fecha actual + 1 día en la sesión.
      sessionStorage.setItem('dateFetchDetailPodcast', new Date().setDate(new Date().getDate() + 1));
    }).catch((e) => {
      console.error("**Error al invocar al servicio de detalle", e.response);
      history.push(PAGES.HOME);
    }).finally(() => hideLoader());
  }

  const handleGoToEpisode = (_uid) => {
    history.push(PAGES.EPISODE.replace(':id', idPodcast).replace(':uid', _uid), {id: idPodcast, uid: _uid});
  }

  const titleBodyTemplate = (rowData) => {
    return <StyledTitleTable onClick={() => handleGoToEpisode(rowData.trackId)}>{rowData.trackName}</StyledTitleTable>;
  }

  return (
    <>
      <StyledPrimaryContainer>
        <StyledContainerLeft className="col-3">
          <TitlePodcast dataPodcast={detailPodcast[0]}/>
        </StyledContainerLeft>
        <StyledContainerRight className="col-9">
          <Card style={{ margin: '1em' }}>
            <StyledTitleDetail>Episodes: {detailPodcast[0]?.trackCount}</StyledTitleDetail>
          </Card>
          <Card style={{ margin: '1em' }}>
            <DataTable value={detailPodcast} responsiveLayout="scroll">
              <Column field="trackName" header="Title" body={titleBodyTemplate}></Column>
              <Column field="releasedDate" header="Date" body={data => {return getFormatDate(data.releaseDate)}}></Column>
              <Column field="trackTimeMillis" header="Duration" body={data => {return milisecondssToMinutesYSeconds(data.trackTimeMillis)}}></Column>
            </DataTable>
          </Card>
        </StyledContainerRight>
      </StyledPrimaryContainer>
      <ScrollTop />
      {loader}
    </>
  );
}

export default connect(
  (state) => ({
    podcastDetailReducer: state.podcastDetail.data
  }),
  (dispatch) => ({
    resultPodcastDetailRequest: (data) => dispatch(resultPodcastDetailRequestReducer(data))
  })
)(DetailPodcast);