import React from "react";

const ProductCardSkeleton: React.FC = () => {
  return (
    <article className="relative h-96 w-72 animate-pulse overflow-hidden rounded-2xl bg-white p-3 shadow-lg">
      {/* Top right logo placeholder */}

      {/* Main image placeholder */}
      <div className="mb-2 h-48 w-full rounded-lg bg-gray-200" />

      {/* Category line */}
      <div className="mb-2 h-3 w-24 rounded bg-gray-200" />

      <hr className="my-1" />

      {/* Title placeholder */}
      <div className="mb-3 h-5 w-3/4 rounded bg-gray-200" />

      {/* Description placeholder */}
      <div className="mb-4 space-y-2">
        <div className="h-3 w-full rounded bg-gray-200" />
        <div className="h-3 w-5/6 rounded bg-gray-200" />
      </div>

      {/* Button placeholder */}
      <div className="h-8 w-28 rounded-md bg-gray-300" />
    </article>
  );
};

export default ProductCardSkeleton;
