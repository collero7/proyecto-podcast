import React from 'react'

import { StyledContainerText, StyledIcon } from './NotFound.styles.js';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {

  return (
    <StyledContainerText>
      <span>
        <StyledIcon icon={faExclamationTriangle} />
        Pagina no encontrada
      </span>
    </StyledContainerText>
  );
}
