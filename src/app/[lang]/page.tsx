import CategorySection from "@/components/root-page/CategorySection";
import ProductsSection from "@/components/root-page/ProductsSection";

interface HomeProps {
  params: { lang: string };
}

const Home: React.FC<HomeProps> = async ({ params }) => {
  const { lang } = await params;

  return (
    <main>
      <CategorySection lang={lang} />
      <ProductsSection lang={lang} />
    </main>
  );
};

export default Home;
