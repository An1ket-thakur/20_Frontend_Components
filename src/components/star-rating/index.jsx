import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleRating(index) {
    setRating(index);
  }
  function handleMouseEnter(index) {
    setHover(index);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <>
      <div
        style={{
          margin: " 50vh auto 10px",
          fontSize: "20px",
        }}
      >
        Star Rating
      </div>
      {[...Array(5)].map((_, index) => {
        index++;
        return (
          <FaStar
            key={index}
            className={index <= (rating || hover) ? "active" : "inactive"}
            size={30}
            onClick={() => {
              handleRating(index);
            }}
            onMouseEnter={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
      <div>{rating}</div>
    </>
  );
}
