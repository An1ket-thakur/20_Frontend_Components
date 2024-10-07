import { useEffect, useState } from "react";

export default function useFetch({ url, options = {} }) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const resdata = await response.json();
      setData(resdata);
      setPending(false);
      setError(null);
    } catch (e) {
      setError(`${e} : error occurred`);
      setPending(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, pending };
}
