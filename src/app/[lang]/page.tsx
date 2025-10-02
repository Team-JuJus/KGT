import CategorySection from "@/components/root-page/CategorySection";
import MainSection from "@/components/root-page/MainSection";
import ProductsSection from "@/components/root-page/ProductsSection";

interface HomeProps {
  params: { lang: string };
}

const Home: React.FC<HomeProps> = async ({ params }) => {
  const { lang } = await params;

  return (
    <main>
      <MainSection lang={lang} />
      <CategorySection lang={lang} />
      <ProductsSection lang={lang} />
    </main>
  );
};

export default Home;
