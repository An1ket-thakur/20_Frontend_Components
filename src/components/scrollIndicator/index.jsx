import "./scroll.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
ScrollIndicator.propTypes = {
  url: PropTypes.string.isRequired,
};
export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const responseData = await response.json();
      if (
        responseData &&
        responseData.products &&
        responseData.products.length > 0
      ) {
        setData(responseData.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const scroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((scroll / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => window.removeEventListener("scroll", handleScrollPercentage);
  }, []);

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
  }

  return (
    <>
      <div>
        <div className="top-container">
          <h1>Custom Scroll Indicator</h1>
          <div className="scroll-progress-tracking-container">
            <div
              className="current-progress-bar"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="data-container">
          {data && data.length > 0
            ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
            : null}
        </div>
      </div>
    </>
  );
}
