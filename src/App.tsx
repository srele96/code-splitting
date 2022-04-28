import { useState } from 'react';

export function App() {
  // add state and modify component to verify that react-refresh works
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Code Splitting</h1>
      <p>Initial setup with counter.</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
