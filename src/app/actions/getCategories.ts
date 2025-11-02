"use server";

import { CategoryRaw } from "@/types";
import { createClient } from "@/utils/supabase/server";

export async function getCategories(): Promise<CategoryRaw[]> {
  const supabase = await createClient();
  const data = await supabase.from("categories").select("*");

  const categories = data.data as CategoryRaw[];

  if (data.error) {
    throw new Error(data.error.message);
  }

  return categories;
}
