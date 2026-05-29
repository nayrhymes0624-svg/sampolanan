"use client";

import { useSearchParams } from "next/navigation";


export default function ProductsPage() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const query = searchParams.get("query") ?? "";

  return (
    <div>
      <h1>Products</h1>

      <p>Search: {search}</p>
      <p>Page: {page}</p>
    <p>Query: {query}</p>
    </div>
  );

}
 