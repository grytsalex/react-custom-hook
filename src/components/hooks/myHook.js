import { useEffect, useCallback, useState } from "react";

export const useMyHook = function (counterId, reset) {
  let [count, setCount] = useState(5);
  let [isEnd, setIsEnd] = useState(true);
  let [timerId, setTimerId] = useState(null);

  const start = useCallback(() => {
    setIsEnd(false);
    setTimerId(setInterval(() => setCount(--count), 1000));
  }, [count]);

  const resetTime = useCallback(() => {
    setIsEnd(true);
    setCount(5);
    clearInterval(timerId);
  }, [timerId]);

  useEffect(() => {
    if (count === -1) {
      resetTime();
    }
  });

  return {
    start,
    resetTime,
    isEnd,
    count,
  };
};
