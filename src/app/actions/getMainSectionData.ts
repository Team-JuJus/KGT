"use server";

import { HomeData } from "@/types";
import { createClient } from "@/utils/supabase/server";

export async function getMainSectionData(): Promise<HomeData> {
  const supabase = await createClient();
  const data = (await supabase
    .from("settings")
    .select("*")
    .eq("title", "home")) as { data: { data: HomeData }[] };
  const homeSectionData = data.data[0].data as HomeData;

  return homeSectionData;
}
