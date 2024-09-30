import { useState } from "react";
import data from "./data";
import "./styls.css";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultipleSelection(getCurrentId) {
    let cpymultiple = [...multiple];
    const findIndexofcurrentId = cpymultiple.indexOf(getCurrentId);
    // console.log(findIndexofcurrentId);
    if (findIndexofcurrentId === -1) {
      cpymultiple.push(getCurrentId);
    } else {
      cpymultiple.splice(findIndexofcurrentId, 1);
    }
    setMultiple(cpymultiple);
    // console.log(selected, multiple);
  }
  return (
    <>
      <div className="wrapper">
        <button
          onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
        >
          {enableMultipleSelection === false
            ? "Enable Multiple Selection"
            : "Disable Multiple Selection"}
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div key={dataItem.id} className="item">
                <div
                  onClick={
                    enableMultipleSelection
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultipleSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
                {/* {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) === -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
              </div>
            ))
          ) : (
            <div>Data is empty</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
