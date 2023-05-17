import React, { useState } from 'react'
import { Html5Qrcode } from "html5-qrcode";
export default function Html5QrcodePlugin() {
  const [data, setdata] = useState()

  const startScanner = () => {
    const html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: "100%", height: "auto" } };
    const qrCodeErrorCallback = () => {
      setdata("")
    }
    const qrCodeSussesCallback = (decodedText, decodedResult) => {
      console.log(decodedResult);
      html5QrCode.stop().then(() => {
        setdata(decodedText)
        // console.log(data);
      })
    }

    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSussesCallback, qrCodeErrorCallback);
  }
  return (
    <div style={{ width: 400, borderColor: "#fff", borderWidth: 2, borderStyle: "solid", padding: 10 }}>
      <button onClick={startScanner} style={{ color: "#fff", width: "100%" }}>start</button>
      <div id="reader" style={{ width: "100%", marginBlock: 10 }}></div>
      {
        data &&
        <div style={{ width: "100%" }} >result: {data}</div>
      }
    </div>
  )
}