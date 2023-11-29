const ErrorExample = () => {
  /*  const myList = ["john", "moses", "muili", "amos"];
  const [amos] = myList;
  console.log(amos); */
  let count = 0;
  const increaseCount = () => {
    count = count + 1;
    console.log(count + 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <div>
        <button type="button" onClick={increaseCount} className="btn">
          Increase
        </button>
      </div>
    </>
  );
};

export default ErrorExample;
