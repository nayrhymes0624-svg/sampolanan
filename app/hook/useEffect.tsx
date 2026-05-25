"use client"
//Side Effects(fetch, timers, listenes)

import { useEffect, useState } from "react";


//single use
// export default function UseEffectSamp() {
//   useEffect(() => {
//     console.log("Component mounted");
//   }, []);

//   return <h1>Hello</h1>;
// }

//double use


export default function UseEffectSamp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}