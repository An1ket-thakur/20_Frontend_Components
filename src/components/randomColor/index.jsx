import { useState, useRef, useEffect } from "react";
export default function RandomColor() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const colorInformationRef = useRef(null);
  useEffect(() => {
    if (colorInformationRef.current) {
      colorInformationRef.current.textContent = `Type-${typeofColor} Color-${color}`;
    }
  }, [typeofColor, color]); // Using useRef to reference the d
  function randomRGBcolor() {
    const RGBcolor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
    setColor(RGBcolor);
    setTypeofColor("rgb");
  }
  function randomHexColor() {
    const str = "0123456789ABCDEF";
    let rcolor = "#";
    for (let i = 0; i < 6; i++) {
      rcolor += str[Math.floor(Math.random() * str.length)];
    }
    setColor(rcolor);
    setTypeofColor("hex");
  }
  function colorChange() {
    if (typeofColor === "hex") {
      let rgb = color.substring(1, color.length);
      rgb = `rgb(${parseInt(`${rgb.substring(0, 2)}`, 16)}, ${parseInt(
        `${rgb.substring(2, 4)}`,
        16
      )}, ${parseInt(`${rgb.substring(4, 6)}`, 16)})`;
      setTypeofColor("rgb");
      setColor(rgb);
    } else if (typeofColor === "rgb") {
      let str = color.slice(4, -1).split(",").map(Number);
      // console.log(str, r, g, b);
      const hex =
        "#" +
        `${parseInt(str[0], 10).toString(16).padStart(2, "0")}` +
        `${parseInt(str[1], 10).toString(16).padStart(2, "0")}` +
        `${parseInt(str[2], 10).toString(16).padStart(2, "0")}`;
      setColor(hex);
      setTypeofColor("hex");
    }
  }
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: color,
        }}
      >
        <button style={{ border: "1px solid white" }} onClick={randomHexColor}>
          Create Hex Color
        </button>
        <button style={{ border: "1px solid white" }} onClick={randomRGBcolor}>
          Create RGB Color
        </button>
        <button style={{ border: "1px solid white" }} onClick={colorChange}>
          Change
        </button>
        <div
          ref={colorInformationRef} // Use ref instead of document.querySelector
          className="color-information"
          style={{
            color: "whitesmoke",
            height: "auto", // Adjust to fit larger content
            width: "auto", // Adjust to fit larger content
            margin: "30px auto",
            padding: "10px", // Add some padding
            textAlign: "center", // Center the text
            minWidth: "150px", // Set minimum width
            border: "1px solid white",
          }}
        ></div>
      </div>
    </>
  );
}
