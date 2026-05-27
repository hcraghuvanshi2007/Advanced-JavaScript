import {useState } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  }
  const reset = () => {
    setCount(0);
  }

  useEffect(() => {
    console.log("Count has been updated:", count);
  }, [count]); 

  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={increment}>
      Increment
    </button>
    <button onClick={decrement}>
      Decrement
    </button>
    <button onClick={reset}>
      Reset
    </button>
    </>
  )
}
export default App;