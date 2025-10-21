"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { MOCK_PRODUCTS as data } from "@/Data";
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import clsx from "clsx";

import { RiShareForwardLine } from "react-icons/ri";

interface ProductsSectionProps {
  lang: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ lang }) => {
  const isEnglish = lang === "en";

  return (
    <section className="bg-blue-50 py-5">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between px-3 sm:px-0">
          <h2 className="text-2xl font-bold text-blue-900">
            {isEnglish ? "Products" : "محصولات"}
          </h2>
          <Link
            href={`${lang}/products`}
            className="flex items-center text-blue-900"
          >
            {isEnglish ? "All products" : "همه محصولات"}{" "}
            <RiShareForwardLine
              className={clsx(!isEnglish && "-scale-x-100")}
            />
          </Link>
        </div>

        <hr className="my-3" />

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop
          navigation
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
            1280: { slidesPerView: 4, centeredSlides: false },
          }}
          className="!p-5"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="!flex !justify-center">
              <ProductCard
                title={isEnglish ? item.title_en : item.title_fa}
                link={item.link}
                image={item.image}
                alt={item.alt}
                desc={isEnglish ? item.summary_en : item.summary_fa}
                isEnglish={isEnglish}
                country={isEnglish ? item.country_en : item.country_fa}
                company={item.company}
                category={isEnglish ? item.category_en : item.category_fa}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductsSection;
