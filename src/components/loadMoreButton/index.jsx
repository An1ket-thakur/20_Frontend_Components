import { useRef, useEffect, useState } from "react";
import "./styles.css";
export default function LoadMoreButton() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const hasFetched = useRef(false); // Use useRef to track if fetch has already occurred
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }`
      );
      const data = await response.json();
      console.log(data.products);
      if (data && data.products && data.products.length > 0) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (hasFetched.current) {
      fetchProducts();
    } else {
      hasFetched.current = true; // Mark as fetched after initial call
    }
  }, [count]);
  useEffect(() => {
    if (products && products.length === 50) setDisableButton(true);
  }, [products]);
  if (loading) {
    return <div>Loading! Please Wait</div>;
  }
  return (
    <>
      <div className="load-more-container">
        <div className="product-container">
          {products && products.length > 0
            ? products.map((item) => (
                <div className="product" key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
            : null}
        </div>
        <div className="button-container">
          <button disabled={disableButton} onClick={() => setCount(count + 1)}>
            Load More Products
          </button>
          {disableButton ? <p>You have reached to 50 products</p> : null}
        </div>
      </div>
    </>
  );
}
