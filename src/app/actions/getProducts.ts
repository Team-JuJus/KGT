"use server";

import { Product } from "@/types";
import { createClient } from "@/utils/supabase/server";

interface GetProductsParams {
  page?: number;
  search?: string;
  categoryId?: string;
  company?: string;
  country?: string;
}

export async function getProducts({
  page = 1,
  search = "",
  categoryId,
  company,
  country,
}: GetProductsParams): Promise<Product[]> {
  const supabase = await createClient();

  const limit = 20;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("products")
    .select(
      `id, name_en, name_fa, summary_en, summary_fa, image_url, category_id(name_en,name_fa), company, country_en, country_fa`,
    )
    .range(from, to);

  // 🔍 Search by name (English or Farsi)
  if (search) {
    query = query.or(`name_en.ilike.%${search}%,name_fa.ilike.%${search}%`);
  }

  // 🏷️ Filter by category
  if (categoryId) {
    query = query.eq("category_id", categoryId);
  }

  // 🏭 Filter by company
  if (company) {
    query = query.ilike("company", `%${company}%`);
  }

  // 🌍 Filter by country
  if (country) {
    query = query.or(
      `country_en.ilike.%${country}%,country_fa.ilike.%${country}%`,
    );
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }

  return data as unknown as Product[];
}
