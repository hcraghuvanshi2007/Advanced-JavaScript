import React from "react";
import Child from "./Components/Child";

function App() {
  const name = "Himanchal";
  const age = 20;

  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={name} age={age} />
    </div>
  );
}

export default App;