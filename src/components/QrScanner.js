import React, { useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';
import { QRCode } from 'react-qrcode';

const QrScanner = (props) => {
  const [data, setData] = useState('');
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setScanResult(result.getText());
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <>
      <QRCode value={data} />
      <BrowserMultiFormatReader
        onScan={handleScan}
        onError={handleError}
      />
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter text to generate QR code"
      />
      {scanResult && (
        <p>Scanned result: {scanResult}</p>
      )}
    </>
  );
};

export default QrScanner;