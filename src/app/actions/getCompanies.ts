"use server";

import { Company } from "@/types";
import { createClient } from "@/utils/supabase/server";

export async function getCompanies(): Promise<Company[]> {
  const supabase = await createClient();

  const fetched = await supabase.from("companies").select("*");
  const companies = fetched.data as unknown as Company[];

  if (fetched.error) {
    console.error(fetched.error);
    throw new Error("Failed to fetch products");
  }

  return companies ?? [];
}
