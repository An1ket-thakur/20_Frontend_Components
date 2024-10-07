import "./styles.css";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchImages = async (geturl) => {
    try {
      setLoading(true);
      const response = await fetch(`${geturl}?page=1&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);
  function handlePrevSlide() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNextSlide() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  if (loading) {
    <div>Loading ! Please wait</div>;
  }
  if (errorMessage !== null) {
    <div>Error occured ! {errorMessage}</div>;
  }

  return (
    <>
      <div className="container">
        <BsArrowLeftCircleFill
          onClick={handlePrevSlide}
          className="arrow arrow-left"
        />
        {images && images.length > 0
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNextSlide}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
}
