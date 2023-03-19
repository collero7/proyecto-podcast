import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledContainerCard, StyledContainerImg, StyledImg, StyledTitle, StyledSubTitle } from "./TitlePodcast.styles";
import { PAGES } from '@routes/constants';
import { Card } from 'primereact/card';


const TitlePodcast = ({ dataPodcast }) => {

  const history = useHistory();
  const [ dataTitlePodcast, setDataTitlePodcast ] = useState();

  useEffect(() => {
    setDataTitlePodcast(dataPodcast);
  },[dataPodcast]);

  const goToDetailView = () => {
    history.push(PAGES.DETAIL.replace(':id', dataTitlePodcast?.collectionId), {id: dataTitlePodcast?.collectionId});
  }

  return (
    <Card style={{ width: '280px', margin: '1em' }}>
      <StyledContainerCard>
        <StyledContainerImg>
          <StyledImg src={dataTitlePodcast?.artworkUrl600} onClick={goToDetailView}/>
        </StyledContainerImg>
        <StyledTitle onClick={goToDetailView}>{dataTitlePodcast?.collectionName}</StyledTitle>
        <StyledSubTitle>by {dataTitlePodcast?.artistName}</StyledSubTitle>
      </StyledContainerCard>
    </Card>
  )
}

export default TitlePodcast;