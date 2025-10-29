"use server";

import { Product } from "@/types";

export async function getProducts(page?: number): Promise<Product> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const url = new URL("/api/products", baseUrl);

  if (page) {
    url.searchParams.set("page", page.toString());
  }

  const res = await fetch(url.toString(), { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch products in action");
  }

  return res.json();
}
