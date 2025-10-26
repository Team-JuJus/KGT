import { CategoryRaw } from "@/types";

export async function getCategories(): Promise<CategoryRaw[]> {
  "use server";

  const url = new URL(
    "/mock/categories.json",
    process.env.NEXT_PUBLIC_SITE_URL,
  );
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
