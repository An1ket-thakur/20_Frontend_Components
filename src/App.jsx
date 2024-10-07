import Accordian from "./components/Accordian";
import RandomColor from "./components/randomColor";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/imageSlider";
import "./App.css";

function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating />
      <ImageSlider url="https://picsum.photos/v2/list" limit={10} />
    </>
  );
}

export default App;
