'use client';

import { useState } from 'react';

type Props = {
  username: string;
};

export default function Counter({
  username,
}: Props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hello {username}</h2>

      <p>Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
    </div>
  );
}