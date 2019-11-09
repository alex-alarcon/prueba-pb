import React from 'react';

import './Loader.css';

function Loader() {
  return (
    <div className="Loader table w-screen h-screen">
      <div className="Loading__Dots table-cell align-middle text-center">
        <div className="bounce1 mx-2 w-6 h-6 bg-teal-500 rounded-full inline-block" />
        <div className="bounce2 mx-2 w-6 h-6 bg-teal-500 rounded-full inline-block" />
        <div className="bounce3 mx-2 w-6 h-6 bg-teal-500 rounded-full inline-block" />
      </div>
    </div>
  );
}

export default Loader;
