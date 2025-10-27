import ArticleSection from "@/components/root-page/ArticleSection";
import CategorySection from "@/components/root-page/CategorySection";
import MainSection from "@/components/root-page/MainSection";
import ProductsSection from "@/components/root-page/ProductsSection";

interface HomeProps {
  params: { lang: string };
}

export const dynamic = "force-static";

const Home: React.FC<HomeProps> = async ({ params }) => {
  const { lang } = await params;

  return (
    <main>
      <MainSection lang={lang} />
      <CategorySection lang={lang} />
      <ProductsSection lang={lang} />
      <ArticleSection lang={lang} />
    </main>
  );
};

export default Home;
