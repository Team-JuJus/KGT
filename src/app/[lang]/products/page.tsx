import { getCategories } from "@/app/actions/getCategories";
import { getCompanies } from "@/app/actions/getCompanies";
import Section from "./Section";

export const dynamic = "force-static";

const page = async ({ params }: { params: { lang: string } }) => {
  const { lang } = await params;

  const isEnglish = lang === "en";

  const categories = getCategories();
  const companies = getCompanies();

  return (
    <main>
      <div className="flex items-center justify-center bg-blue-900 p-2 text-white">
        <h2 className="text-3xl font-bold">
          {isEnglish ? "Products" : "محصولات"}
        </h2>
      </div>
      <Section
        isEnglish={isEnglish}
        companies={companies}
        categories={categories}
      />
    </main>
  );
};

export default page;
