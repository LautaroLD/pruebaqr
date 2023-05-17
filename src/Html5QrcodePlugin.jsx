import React, { useState } from 'react'
import { Html5Qrcode } from "html5-qrcode";
export default function Html5QrcodePlugin() {
  const [data, setdata] = useState()

  const startScanner = () => {
    const html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    const qrCodeErrorCallback = () => {
      console.log("error");
    }
    const qrCodeSussesCallback = (decodedText) => {
      console.log(decodedText);
      html5QrCode.stop().then(() => {
        setdata(decodedText)
      })
    }

    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSussesCallback, qrCodeErrorCallback);
  }
  return (
    <>
      <button onClick={startScanner} style={{ color: "#fff" }}>start</button>
      <div id="reader" style={{ width: 300, height: 300, borderColor: "#fff", borderWidth: 2, borderStyle: "solid", overflow: "hidden" }}></div>
      <div style={{ borderColor: "#fff", borderWidth: 2, borderStyle: "solid", maxWidth: 300 }} >result: {data}</div>
    </>
  )
}