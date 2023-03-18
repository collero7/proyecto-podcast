import React, { useState, useEffect } from 'react';
import { 
  StyledContainerCard,
  StyledContainerImg,
  StyledImg,
  StyledTitle,
  StyledSubTitle
} from "./TitlePodcast.styles";
import { Card } from 'primereact/card';


const TitlePodcast = ({ dataPodcast }) => {

    const [ dataTitlePodcast, setDataTitlePodcast ] = useState();

    useEffect(() => {
        setDataTitlePodcast(dataPodcast);
    },[dataPodcast]);

    return (
        <Card style={{ width: '280px', margin: '1em' }}>
          <StyledContainerCard>
            <StyledContainerImg>
              <StyledImg src={dataTitlePodcast?.artworkUrl600} />
            </StyledContainerImg>
            <StyledTitle>{dataTitlePodcast?.collectionName}</StyledTitle>
            <StyledSubTitle>by {dataTitlePodcast?.artistName}</StyledSubTitle>
          </StyledContainerCard>
        </Card>
    )
}

export default TitlePodcast;