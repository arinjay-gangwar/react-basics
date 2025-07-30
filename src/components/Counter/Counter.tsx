import { useState } from "react";

import styles from "./Counter.module.css";

interface CounterProps {
  initialValue?: number;
  onChange?: (value: number) => void;
  step?: number;
}

const Counter: React.FC<CounterProps> = ({
  initialValue = 0,
  onChange,
  step = 1,
}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    const newValue = count + step;
    setCount(newValue);
    onChange?.(newValue);
  };

  const decrement = () => {
    const newValue = count - step;
    setCount(newValue);
    onChange?.(newValue);
  };

  return (
    <section className={styles["counter-container"]}>
      <h2>Count: {count}</h2>
      <p>Step size: {step}</p>
      <div className={styles["btn-container"]}>
        <button
          onClick={decrement}
          disabled={count <= 0}
          aria-label="Decrement count">
          -
        </button>
        <button
          onClick={increment}
          aria-label="Increment count">
          +
        </button>
      </div>
    </section>
  );
};

export default Counter;
