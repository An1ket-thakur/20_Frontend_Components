import useFetch from ".";
export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch({
    url: "https://dummyjson.com/products",
    options: {},
  });

  return (
    <>
      <div>
        <h1>Use Fetch Hook</h1>
        {pending ? <h3>Pending! Please wait</h3> : null}
        {error ? <h3>Error!</h3> : null}
        {
          data && data.products && data.products.length
            ? data.products.map((productItem) => (
                <p key={productItem.id}>{productItem.title}</p>
              ))
            : !pending && !error && <h3>No Data Available</h3> // If there's no data, but also no error/pending
        }
      </div>
    </>
  );
}
