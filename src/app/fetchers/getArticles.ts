import { Articles } from "@/types";

export async function getArticles(): Promise<Articles[]> {
  const url = new URL("/mock/articles.json", process.env.NEXT_PUBLIC_SITE_URL);
  const res = await fetch(url.toString(), { cache: "force-cache" });
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}
