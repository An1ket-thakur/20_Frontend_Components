import { useState } from "react";
import QRCode from "react-qr-code";
export default function QRCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
        <QRCode value={qrCode} size={300} bgColor="#fff" />
      </div>
    </>
  );
}
