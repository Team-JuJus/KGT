import AboutUs from "@/components/about-page/about-us";
import CategorySection from "@/components/root-page/CategorySection";
import MainSection from "@/components/root-page/MainSection";
import ProductsSection from "@/components/root-page/ProductsSection";

interface HomeProps {
  params: { lang: string };
}

const Home: React.FC<HomeProps> = async ({ params }) => {
  const { lang } = await params;
  const isEnglish = lang === "en";

  return (
    <main>
      <MainSection lang={lang} />
      <CategorySection lang={lang} />
      <ProductsSection lang={lang} />
      <AboutUs isEnglish={isEnglish} />
    </main>
  );
};

export default Home;
