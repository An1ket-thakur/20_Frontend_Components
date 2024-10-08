import "./App.css";
// import Accordian from "./components/Accordian";
// import RandomColor from "./components/randomColor";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/imageSlider";
// import LoadMoreButton from "./components/loadMoreButton";
// import TreeView from "./components/tree-view";
// import menus from "./components/tree-view/data";
// import QRCodeGenerator from "./components/qr-code-generator";
// import TicTacToe from "./components/tic-tac-toe";
// import ScrollIndicator from "./components/scrollIndicator";
// import UseFetchHookTest from "./components/use-fetch/test";
import ScrolltoTopnBottom from "./components/scroll-to-top-and-bottom";
import ScrolltoSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
function App() {
  return (
    <>
      {/* <Accordian />
      <RandomColor />
      <StarRating />
      <ImageSlider url="https://picsum.photos/v2/list" limit={10} />
      <LoadMoreButton />
      <QRCodeGenerator />
      <TreeView menus={menus} />
      <TicTacToe />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <UseFetchHookTest /> */}
      <ScrolltoTopnBottom />
      <ScrolltoSection />
    </>
  );
}

export default App;
