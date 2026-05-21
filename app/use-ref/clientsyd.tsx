"use client";

import { useRef } from "react";


export default function UseRefSamp() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}
