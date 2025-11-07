"use server";

import { AboutData } from "@/types";
import { createClient } from "@/utils/supabase/server";

export async function getAboutUsData(): Promise<AboutData> {
  const supabase = await createClient();
  const data = (await supabase
    .from("settings")
    .select("*")
    .eq("title", "about")) as { data: { data: AboutData }[] };
  const aboutSectionData = data.data[0].data as AboutData;

  return aboutSectionData;
}
