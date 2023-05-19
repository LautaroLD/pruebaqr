import React, { useEffect, useState } from 'react'
import { Html5Qrcode, Html5QrcodeCameraScanConfig, QrcodeSuccessCallback, QrcodeErrorCallback, Html5QrcodeResult } from "html5-qrcode";
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { QrScanner } from '@yudiel/react-qr-scanner';

// export default function ScannerQrPage() {
//   const [data, setdata] = useState<string>()
//   // const navigate = useNavigate()
//   useEffect(
//     () => {
//       const html5QrCode = new Html5Qrcode("reader");
//       const config: Html5QrcodeCameraScanConfig = {
//         fps: 40,
//         qrbox: { width: window.screen.width, height: window.screen.height},
//         // aspectRatio: 1.2,
//       };
//       const qrCodeErrorCallback: QrcodeErrorCallback = () => {
//         // setdata("")
//       }
//       const qrCodeSussesCallback: QrcodeSuccessCallback = (decodedText: string, decodedResult: Html5QrcodeResult) => {
//         console.log(decodedResult);
//         setdata(decodedText)
//         console.log(data);
//         // html5QrCode.stop().then(() => {
//         // navigate("/home")
//         // })
//       }

//       html5QrCode.start({ facingMode: "environment" }, config, qrCodeSussesCallback, qrCodeErrorCallback);
//     }
//     , [])
//   return (
//     <main>
//       <ArrowLeftIcon className='w-[30px] m-3  fixed top-1 z-10 text-white' />
//       <div id="reader" className=' w-[100vw] h-[100vh]' />
//       <div className='w-full p-5  fixed bottom-0 z-10 bg-slate-400'>
//         <p className=' text-white text-[1.25rem] text-center'>Escaneá el código para pagar</p>
//       </div>
//     </main>
//   )
// }

export default function ScannerQrPage() {
  return (
    <main className='h-[100vh] flex  overflow-hidden'>
      {/* <ArrowLeftIcon className='w-[30px] m-3  fixed top-1 z-10 text-[#339]' /> */}
      <QrScanner
        onDecode={(result) => console.log(result)}
        onError={(error) => console.log(error?.message)}
        containerStyle={{ height: "100%", padding: 0, margin: "auto" }}
        videoStyle={{ maxWidth: "none", width: "auto" }}
        viewFinder={() =>
          <>
            <ArrowLeftIcon className='w-[30px] m-3  fixed top-1 z-10 text-white' />
            <div className='w-full p-5  fixed bottom-0 z-10 bg-slate-400'>
              <p className=' text-white text-[1.25rem] text-center'>Escaneá el código para pagar</p>
            </div>
          </>
        }
      />
      {/* <div className='w-full p-5  fixed bottom-0 z-10 bg-slate-400'>
        <p className=' text-white text-[1.25rem] text-center'>Escaneá el código para pagar</p>
      </div> */}
    </main>
  )
}