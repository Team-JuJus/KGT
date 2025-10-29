"use client";

import { useRouter } from "next/navigation";

type Props = {
  lang: string;
  totalPages: number;
  currentPage: number;
};

export default function Pagination({ currentPage, lang, totalPages }: Props) {
  const router = useRouter();

  const isRTL = lang === "fa";

  const labels = {
    prev: isRTL ? "قبلی" : "Previous",
    next: isRTL ? "بعدی" : "Next",
    page: isRTL ? "صفحه" : "Page",
    of: isRTL ? "از" : "of",
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    router.push(`/${lang}/products?page=${page}`);
  };

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="mt-6 flex w-full items-center justify-center gap-3 text-sm"
    >
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded border px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
      >
        {labels.prev}
      </button>

      <span className="text-gray-700">
        {labels.page} {currentPage} {labels.of} {totalPages}
      </span>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded border px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
      >
        {labels.next}
      </button>
    </div>
  );
}
