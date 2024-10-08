import useWindowResize from ".";
export default function ResizeTest() {
  const { height, width } = useWindowResize();
  return (
    <>
      <div>
        <h1>Use Window Resize</h1>
        <h3>Height is {height}</h3>
        <h3>Width is {width}</h3>
      </div>
    </>
  );
}
