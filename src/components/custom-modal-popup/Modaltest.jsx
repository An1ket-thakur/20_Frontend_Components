import { useState } from "react";
import ModalPopup from "./modal";
import "./modal.css";
export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div>
      {!showModalPopup ? (
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      ) : null}
      {showModalPopup && (
        <ModalPopup
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
}
