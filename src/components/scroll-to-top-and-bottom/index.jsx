import useFetch from "../use-fetch";
import { useRef } from "react";
export default function ScrolltoTopnBottom() {
  const { data, error, pending } = useFetch({
    url: "https://dummyjson.com/products",
    options: {},
  });
  const bottomRef = useRef(null);
  const topRef = useRef(null);
  function handleScrollTop() {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function handleScrollBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }
  // Alertnate method for scroll to top n bottom with vanilla javascript
  //   function handleScrollTop() {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }

  //   function handleScrollBottom() {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   }
  return (
    <>
      <div>
        <div ref={topRef}></div>
        <h2>This is top of the page</h2>
        <button onClick={handleScrollBottom}>Scroll To Bottom</button>
        {pending ? <h3>Pending! Please wait</h3> : null}
        {error ? <h3>Error!</h3> : null}
        <ul style={{ listStyle: "none" }}>
          {data && data.products && data.products.length
            ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
            : null}
        </ul>
        <div ref={bottomRef}></div>
        <button onClick={handleScrollTop}>Scroll To Top</button>
        <h2>This is end of the page</h2>
      </div>
    </>
  );
}
