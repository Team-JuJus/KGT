"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";

interface ProductSwiperProps {
  products: Product["data"];
  isEnglish: boolean;
}

export default function ProductSwiper({
  products,
  isEnglish,
}: ProductSwiperProps) {
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
      className="p-5!"
    >
      {products.map((item, index) => (
        <SwiperSlide key={index} className="flex! justify-center!">
          <ProductCard
            title={isEnglish ? item.name_en : item.name_fa}
            link={item.image_url}
            image={item.image_url}
            alt="Product image"
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
