import Accordian from "./components/Accordian";
import RandomColor from "./components/randomColor";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/imageSlider";
import "./App.css";
import LoadMoreButton from "./components/loadMoreButton";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import TicTacToe from "./components/tic-tac-toe";
function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating />
      <ImageSlider url="https://picsum.photos/v2/list" limit={10} />
      <LoadMoreButton />
      <QRCodeGenerator />
      <TreeView menus={menus} />
      <TicTacToe />
    </>
  );
}

export default App;
