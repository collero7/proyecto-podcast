import React from 'react';
import { ScrollTop as ScrollTopPrime } from 'primereact/scrolltop';

const ScrollTop = () => {
  return (
    <div>
      <div className="flex flex-row-reverse">
        <ScrollTopPrime />
      </div>
    </div>
  )
}

export default ScrollTop;