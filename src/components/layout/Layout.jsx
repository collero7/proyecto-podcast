import React, { useState } from 'react'
import Header from '@components/header/Header';
import { StyledLayout, StyledHead, StyledMain, StyledContainerBody } from "./Layout.styles";

export default function Layout({ children }) {

  const menuPosition = () => {
    const menuHeight = $('.menu').outerHeight();
    setHeight(menuHeight);
  };
  
  window.addEventListener('resize', function () {
    menuPosition();
  });

  $(window).scroll(function () {
    menuPosition();
  });

  const [height, setHeight] = useState();
  
  return (
    <StyledLayout>
      <StyledHead className="menu">
        <Header/>
      </StyledHead>
      <StyledMain refHeight={height}>
        <StyledContainerBody>
          <div className="col-1"></div>
          <div className="col-10">{children}</div>
          <div className="col-1"></div>
        </StyledContainerBody>
      </StyledMain>
    </StyledLayout>
  );
}