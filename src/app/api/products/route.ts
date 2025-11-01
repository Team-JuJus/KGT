import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

const PAGE_SIZE = 20;

export async function GET(req: Request) {
  const supabase = await createClient();
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);

  const fetchedData = await supabase
    .from("products")
    .select(
      `id, name_en, name_fa, summary_en, summary_fa, company, category_id(name_en, name_fa), image_url`,
    );

  const allProducts = fetchedData.data || [];

  const start = (page - 1) * PAGE_SIZE;
  const data = allProducts.slice(start, start + PAGE_SIZE);

  return NextResponse.json({
    data,
    total: allProducts.length,
    page,
    totalPages: Math.ceil(allProducts.length / PAGE_SIZE),
  });
}
