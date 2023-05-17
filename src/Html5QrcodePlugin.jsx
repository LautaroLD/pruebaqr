// import { Html5QrcodeScanner } from 'html5-qrcode';
// import { useEffect } from 'react';

// const qrcodeRegionId = "html5qr-code-full-region";

// // Creates the configuration object for Html5QrcodeScanner.
// const createConfig = (props) => {
//   let config = {};
//   if (props.fps) {
//     config.fps = props.fps;
//   }
//   if (props.qrbox) {
//     config.qrbox = props.qrbox;
//   }
//   if (props.aspectRatio) {
//     config.aspectRatio = props.aspectRatio;
//   }
//   if (props.disableFlip !== undefined) {
//     config.disableFlip = props.disableFlip;
//   }
//   return config;
// };

// const Html5QrcodePlugin = (props) => {

//   useEffect(() => {
//     // when component mounts
//     const config = createConfig(props);
//     const verbose = props.verbose === true;
//     // Suceess callback is required.
//     if (!(props.qrCodeSuccessCallback)) {
//       throw "qrCodeSuccessCallback is required callback.";
//     }
//     const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
//     html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);

//     // cleanup function when component will unmount
//     return () => {
//       html5QrcodeScanner.clear().catch(error => {
//         console.error("Failed to clear html5QrcodeScanner. ", error);
//       });
//     };
//   }, []);

//   return (
//     <div id={qrcodeRegionId} />
//   );
// };

// export default Html5QrcodePlugin;

import { Html5Qrcode } from "html5-qrcode";
import React, { useEffect, useState } from 'react'
export default function Html5QrcodePlugin({ }) {
  const [data, setdata] = useState()
  // type Props = {}
  // Html5Qrcode.getCameras().then(devices => {
  //   /**
  //    * devices would be an array of objects of type:
  //    * { id: "id", label: "label" }
  //    */
  //   if (devices && devices.length) {
  //     var cameraId = devices[0].id;
  //     // .. use this to start scanning.
  //   }
  // }).catch(err => {
  //   // handle err
  // });
  useEffect(() => {

    const html5QrCode = new Html5Qrcode("reader");
    const qrCodeErrorCallback = () => {
      console.log("error");
    }
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      /* handle success */
      console.log(decodedResult);
      console.log(decodedText);
      html5QrCode.stop().then(() => {
        setdata(decodedResult)
      })
    };
    const config = { fps: 10, qrbox: { width: 300, height: 300 } };
    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback, qrCodeErrorCallback);
  }, [])
  return (
    <>
      <div id="reader" style={{ width: 300, height: 300, borderColor: "#fff", borderWidth: 2, borderStyle: "solid" }}></div>
      <div>{data}</div>
    </>
  )
}