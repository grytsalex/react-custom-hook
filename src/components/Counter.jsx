import React from "react";
import { Button, Display } from "./styledComponent";
import { useMyHook } from "./hooks/myHook";

function App() {
  const { start, resetTime, isEnd, count } = useMyHook();

  const handleClick = () => {
    if (isEnd) {
      start();
    } else {
      resetTime();
    }
  };

  return (
    <div>
      <Display>{count}</Display>
      <Button onClick={handleClick} isEnd={isEnd}>
        {isEnd ? "Start" : "Stop"}
      </Button>
    </div>
  );
}

export default App;
