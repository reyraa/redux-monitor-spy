import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterIncremented, counterReset } from './action';

interface CounterReducer {
  value: number,
}

interface Store {
  counterReducer: CounterReducer,
}

const Interval = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const store = useSelector((state:Store) => state.counterReducer);

  const start = () => {
    const i = setInterval(() => {
      dispatch(counterIncremented());
    }, 2000);
    setIndex(i);
  };

  const stop = () => {
    clearInterval(index);
    setIndex(0);
  };

  const reset = () => {
    dispatch(counterReset());
  };

  useEffect(() => () => stop(), []);

  return (
    <div className="SearchPage">
      <button disabled={index !== 0} onClick={start}>Start</button>
      <button disabled={index === 0} onClick={stop}>Stop</button>
      <button disabled={store.value === 0} onClick={reset}>Reset</button>
      <h2>{store.value}</h2>
    </div>
  );
};
export default Interval;
