"use client";

import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();

  const slug = params.slug;

  return (
    <div>
      <h1>Slug: {slug}</h1>
    </div>
  );
}