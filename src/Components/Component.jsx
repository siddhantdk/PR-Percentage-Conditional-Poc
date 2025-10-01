import { useEffect, useState } from "react";

export const HelloComponent = ({ name, initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const [showMessage, setShowMessage] = useState(true);

  // A function not used in tests to reduce coverage
  const unusedFunction = () => {
    console.log("This function is never called");
  };
  /// omkar test comment

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>HelloComponent, {name}!</h1>

      {showMessage && <p>Welcome to our app!</p>}

      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <p>Count: {count}</p>
      </div>

      <div>
        {count % 2 === 0 ? <p>The count is even.</p> : <p>The count is odd.</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Type something..."
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <div>
        {[1, 2, 3, 4, 5].map((num) => (
          <span key={num}>{num}, </span>
        ))}
      </div>
    </div>
  );
};
