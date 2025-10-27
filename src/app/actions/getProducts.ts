"use server";

import { Product } from "@/types";

export async function getProducts(): Promise<Product[]> {
  const url = new URL("/mock/products.json", process.env.NEXT_PUBLIC_SITE_URL);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
