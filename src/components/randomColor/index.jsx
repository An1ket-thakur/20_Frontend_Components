import { useState } from "react";
export default function RandomColor() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: color,
        }}
      >
        <button style={{ border: "1px solid white" }}>Create Hex Color</button>
        <button style={{ border: "1px solid white" }}>Create RGB Color</button>
        <button style={{ border: "1px solid white" }}>Create HSL Color</button>
        <button style={{ border: "1px solid white" }}>
          Generate Random Color
        </button>
      </div>
    </>
  );
}
