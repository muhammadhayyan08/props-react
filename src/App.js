import { useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Cards handleClick={handleClick} text="Click me">
        <h1>{count}</h1>
      </Cards>
    </div>
  );
}

export default App;
