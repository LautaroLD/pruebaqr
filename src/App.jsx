import React, { useState } from 'react'
import './App.css'
import Html5QrcodePlugin from './Html5QrcodePlugin';
const App = (props) => {

  const onNewScanResult = (decodedText, decodedResult) => {
      // handle decoded results here
  };

  return (
      <div className="App">
          <Html5QrcodePlugin
              fps={10}
              qrbox={250}
              disableFlip={false}
              qrCodeSuccessCallback={onNewScanResult}
          />
      </div>
  );
};

export default App;