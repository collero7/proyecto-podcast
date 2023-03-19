import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { resultPodcastsRequest as resultPodcastsRequestReducer } from '@store/reducers/podcastsReducer';
import { useHistory } from 'react-router-dom';
import { 
  StyledPrimaryContainer,
  StyledContainerSearch,
  StyledSearch,
  StyledNumResultSearch,
  StyledContainerCards,
  StyledCard,
  StyledImg,
  StyledTittleAlbum,
  StyledAuthor
} from "./Home.styles";
import useFullPageLoader from '@hooks/useFullPageLoader';
import { InputText } from 'primereact/inputtext';
import ScrollTop from '@components/ui/scrollTop/ScrollTop';
import { Card } from 'primereact/card';
import { getListPodcast } from '@services/axios_service/api';
import { PAGES } from '@routes/constants';

const fetchRequestGetListPodcast = () => {
  return getListPodcast().then((response) => {
    return response.data;
  })
}


const Home = ({ podcastsReducer, resultPodcastsRequest }) => {

  const history = useHistory();
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [ inputSearchText, setInputSearchText ] = useState("");
  const [ listPodcast, setListPodcast ] = useState(podcastsReducer ? podcastsReducer : []);
  const [ numListPodcastSearch, setNumListPodcastSearch ] = useState(podcastsReducer ? podcastsReducer.length : 0);

  useEffect(() => {
    // Se verifica si tenemos datos almacenados en el Storage de redux y se consulta si hemos 
    // superado la fecha de 1 día. Si se ha superado la fecha, volvemos a realizar la consulta y actualizamos
    // la fecha almacenada en la sesión.
    if(!podcastsReducer || (new Date(parseInt(sessionStorage.getItem('dateFetchListPodcast'))) <= new Date())) {
      getRequestGetListPodcast();
    }
  },[]);

  const getRequestGetListPodcast = () => {
    showLoader();

    fetchRequestGetListPodcast().then((resp) => {
      let respService = JSON.parse(resp.contents).feed.results;
      setListPodcast(respService);
      setNumListPodcastSearch(respService.length);
      resultPodcastsRequest(respService);

      //Se almacena la fecha actual + 1 día en la sesión.
      sessionStorage.setItem('dateFetchListPodcast', new Date().setDate(new Date().getDate() + 1));
    })
    .catch(e => console.error("** Error al invocar al servicio de listado", e.response))
    .finally(() => hideLoader());
  }

  const handleInputSearchText = (e) => {
    setInputSearchText(e.target.value);
    let resultSearch = podcastsReducer?.filter((elem) => {
      return elem.name.toLowerCase().includes(e.target.value.toLowerCase()) || elem.artistName.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setNumListPodcastSearch(resultSearch?.length);
    setListPodcast(resultSearch);
  }

  const handleCardClick = (idPodcast) => {
    history.push(PAGES.DETAIL.replace(':id', idPodcast), {id: idPodcast});
  }

  return (
    <>
      <StyledPrimaryContainer>
        <StyledContainerSearch>
          <StyledSearch>
            <StyledNumResultSearch>{numListPodcastSearch}</StyledNumResultSearch>
            <InputText type="text" value={inputSearchText} onChange={handleInputSearchText} placeholder="Filter podscats..." />
          </StyledSearch>
        </StyledContainerSearch>
        <StyledContainerCards>
          {listPodcast && listPodcast.map((elem, pos) => (
            <StyledCard key={pos} onClick={() => handleCardClick(elem.id)}>
              <Card style={{ width: '280px', height: '260px', margin: '2em' }}>
                <StyledImg src={elem.artworkUrl100} />
                <StyledTittleAlbum className="m-0" style={{lineHeight: '1.5'}}>{elem.name}</StyledTittleAlbum>
                <StyledAuthor className="m-0" style={{lineHeight: '1.5'}}>Author: {elem.artistName}</StyledAuthor>
              </Card>
            </StyledCard>
          ))}
        </StyledContainerCards>
      </StyledPrimaryContainer>
      <ScrollTop />
      {loader}
    </>
  );
}

export default connect(
  (state) => ({
    podcastsReducer: state.podcasts.data
  }),
  (dispatch) => ({
    resultPodcastsRequest: (data) => dispatch(resultPodcastsRequestReducer(data))
  })
)(Home);