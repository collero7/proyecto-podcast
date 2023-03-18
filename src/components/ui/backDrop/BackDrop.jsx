import React from 'react';
import { StyledBackDrop } from './BackDrop.styles';
import Loader from '../loader/Loader';

export default function BackDrop({ children }) {
  if (!children)
    return (
      <StyledBackDrop>
        <Loader />
      </StyledBackDrop>
    );
  else return <StyledBackDrop>{children}</StyledBackDrop>;
}
