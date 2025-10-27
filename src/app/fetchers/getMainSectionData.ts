import { HomeData } from "@/types";

export async function getMainSectionData(): Promise<HomeData> {
  const url = new URL("/mock/home.json", process.env.NEXT_PUBLIC_SITE_URL);
  const res = await fetch(url.toString(), { cache: "force-cache" });
  if (!res.ok) throw new Error("Failed to fetch main section data");
  return res.json();
}
