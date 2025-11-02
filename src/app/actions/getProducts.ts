"use server";

import { Product } from "@/types";
import { createClient } from "@/utils/supabase/server";

export async function getProducts(page: number): Promise<Product[]> {
  if (!page) page = 1;

  const supabase = await createClient();

  const limit = 20;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const fetched = await supabase.from("products").select("*").range(from, to);
  const products = fetched.data as Product[];

  if (fetched.error) {
    console.error(fetched.error);
    throw new Error("Failed to fetch products");
  }

  console.log(products);

  return products ?? [];
}
