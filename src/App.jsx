import "./App.css";
import Accordian from "./components/Accordian";
import RandomColor from "./components/randomColor";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/imageSlider";
import LoadMoreButton from "./components/loadMoreButton";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import TicTacToe from "./components/tic-tac-toe";
import ScrollIndicator from "./components/scrollIndicator";
import UseFetchHookTest from "./components/use-fetch/test";
import ScrolltoTopnBottom from "./components/scroll-to-top-and-bottom";
import ScrolltoSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
import UseOutsideClickTest from "./components/use-outside-click/test";
import Tabstest from "./components/custom-tabs/Tabstest";
import GithubProfileFinder from "./components/github-profile-finder";
import ResizeTest from "./components/use-window-resize/test";
import ModalTest from "./components/custom-modal-popup/modaltest";
import LightDarkTheme from "./components/light-dark-mode";
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
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <UseFetchHookTest />
      <ScrolltoTopnBottom />
      <ScrolltoSection />
      <UseOutsideClickTest />
      <Tabstest />
      <GithubProfileFinder />
      <ResizeTest />
      <ModalTest />
      <LightDarkTheme />
    </>
  );
}

export default App;
