"use client";

import { useMemo, useState } from "react";

export default function FilterList() {
  const [search, setSearch] = useState("");

  const data: string[] = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Watermelon",
  ];

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Search item..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg p-2 mb-4"
      />

      <ul className="space-y-2">
        {filteredData.map((item, index) => (
          <li
            key={index}
            className="border rounded-lg p-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}