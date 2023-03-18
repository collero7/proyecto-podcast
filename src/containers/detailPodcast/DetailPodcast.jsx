import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { 
  StyledPrimaryContainer,
  StyledContainerLeft,
  StyledContainerRight,
  StyledTitleDetail,
  StyledTitleTable
} from "./DetailPodcast.styles";
import { PAGES } from '@routes/constants';
import { getDetailPodcast } from '@services/axios_service/api';
import TitlePodcast from './component/TitlePodcast';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getFormatDate, milisecondssToMinutesYSeconds } from '@utils/utilsFunctions'

const fetchRequestGetDetailPodcast = (_id) => {
  return getDetailPodcast(_id).then((response) => {
    return response.data;
  })
}


const DetailPodcast = ({ match }) => {

  const history = useHistory();
  const idPodcast = match.params.id;
  const [detailPodcast, setDetailPodcast] = useState({});
  const [resultTable, setResultTable] = useState({});

  useEffect(() => {
    fetchRequestGetDetailPodcast(idPodcast).then((resp) => {
      setDetailPodcast(resp.results);
      console.log("DETAIL PODSCAT", resp.results);
    }).catch(e => console.error("Error al invocar al servicio", e.response));
  },[]);

  useEffect(() => {
    if(detailPodcast?.length > 0){
      let resultTableAux = detailPodcast.map((elem) => {
        elem.releaseDate = getFormatDate(elem.releaseDate)
        elem.trackTimeMillis = milisecondssToMinutesYSeconds(elem.trackTimeMillis)
        return elem;
      });
      setResultTable(resultTableAux);
    }
  },[detailPodcast]);



  const handleButtonBack = () => {
    history.push(PAGES.HOME);
  }

  const titleBodyTemplate = (rowData) => {
    return (
      <StyledTitleTable onClick={handleButtonBack}>{rowData.trackName}</StyledTitleTable>
    );
}

  return (
    <StyledPrimaryContainer>
      <StyledContainerLeft className="col-3">
        <TitlePodcast dataPodcast={detailPodcast[0]}/>
      </StyledContainerLeft>
      <StyledContainerRight className="col-9">
        <Card style={{ margin: '1em' }}>
          <StyledTitleDetail>Episodes: {detailPodcast[0]?.trackCount}</StyledTitleDetail>
        </Card>
        <Card style={{ margin: '1em' }}>
          <DataTable value={resultTable} responsiveLayout="scroll">
            <Column field="trackName" header="Title" body={titleBodyTemplate}></Column>
            <Column field="releaseDate" header="Date"></Column>
            <Column field="trackTimeMillis" header="Duration"></Column>
          </DataTable>
        </Card>
      </StyledContainerRight>
    </StyledPrimaryContainer>
  );
}

export default DetailPodcast;