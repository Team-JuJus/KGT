"use server";

import { Product } from "@/types";
import { createClient } from "@/utils/supabase/server";

export async function getProducts(page: number): Promise<Product[]> {
  if (!page) page = 1;

  const supabase = await createClient();

  const limit = 20;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const fetched = await supabase
    .from("products")
    .select(
      `id, name_en, name_fa, summary_en, summary_fa, image_url, category_id(name_en,name_fa), company, country_en, country_fa`,
    )
    .range(from, to);
  const products = fetched.data as unknown as Product[];

  if (fetched.error) {
    console.error(fetched.error);
    throw new Error("Failed to fetch products");
  }

  return products ?? [];
}
