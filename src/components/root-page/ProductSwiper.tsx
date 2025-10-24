"use client";

import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";

interface ProductSwiperProps {
  data: Promise<Product[]>;
  isEnglish: boolean;
}

export default function ProductSwiper({ data, isEnglish }: ProductSwiperProps) {
  const products = use(data);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides
      loop
      navigation
      breakpoints={{
        640: { slidesPerView: 2, centeredSlides: false },
        1024: { slidesPerView: 3, centeredSlides: false },
        1280: { slidesPerView: 4, centeredSlides: false },
      }}
      className="!p-5"
    >
      {products.map((item, index) => (
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
  );
}
