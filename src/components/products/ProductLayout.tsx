import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";

interface ProductLayoutProps {
  products: Product[];
  isEnglish: boolean;
}

const ProductLayout = ({ products, isEnglish }: ProductLayoutProps) => {
  if (products.length === 0)
    return (
      <div className="flex w-full justify-center p-10">
        <div className="max-w-md text-center">
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
            {isEnglish ? "No products found" : "هیچ محصولی یافت نشد"}
          </h3>

          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            {isEnglish
              ? "Try adjusting filters or check back later."
              : "فیلترها را بررسی کنید یا بعداً دوباره امتحان کنید."}
          </p>
        </div>
      </div>
    );

  return (
    <div className="flex flex-wrap justify-center gap-5 p-5">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          title={isEnglish ? item.name_en : item.name_fa}
          link={item.image_url}
          image={item.image_url}
          alt={item.name_en}
          desc={isEnglish ? item.summary_en : item.summary_fa}
          isEnglish={isEnglish}
          country={isEnglish ? item.country_en : item.country_fa}
          company={item.company}
          category={
            isEnglish
              ? item.category_id["name_en"]
              : item.category_id["name_fa"]
          }
        />
      ))}
    </div>
  );
};

export default ProductLayout;
