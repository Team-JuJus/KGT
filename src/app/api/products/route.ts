import { NextResponse } from "next/server";

const PAGE_SIZE = 20;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);

  // Fetch all products from the backend once (server-side)
  const url = new URL("/mock/products.json", process.env.NEXT_PUBLIC_SITE_URL);
  const res = await fetch(url.toString(), { cache: "force-cache" });
  if (!res.ok) throw new Error("Failed to fetch products");
  const allProducts = await res.json();

  // Slice only what we need
  const start = (page - 1) * PAGE_SIZE;
  const data = allProducts.slice(start, start + PAGE_SIZE);

  return NextResponse.json({
    data,
    total: allProducts.length,
    page,
    totalPages: Math.ceil(allProducts.length / PAGE_SIZE),
  });
}
