"use client";

import { CategoryRaw } from "@/types";
import { getDirection } from "@/utils/getDirection";
import { buildCategoryTree } from "@/utils/treeFromData";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

interface ProductsButtonProps {
  lang: string;
  categories: CategoryRaw[];
  isActive: boolean;
}

const ProductsButton: React.FC<ProductsButtonProps> = ({
  lang,
  categories,
  isActive,
}) => {
  const categoriesTree = buildCategoryTree(categories);

  const dir = getDirection(lang);
  const isRtl = dir === "rtl";

  // State for main dropdown and nested submenus (by category id)
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Close everything when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setOpenSubmenus({});
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        setOpenSubmenus({});
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const toggleSubmenu = (id: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Helpers for positioning classes depending on LTR/RTL
  const mainDropdownPosition = isRtl
    ? "right-0 origin-top-right"
    : "left-0 origin-top-left";

  const nestedPosition = () =>
    isRtl ? "right-full origin-top-right " : "left-full origin-top-left ";

  const dropdownBase =
    "absolute top-6 z-50 mt-2 w-48 bg-white text-black shadow-lg rounded-md ring-1 ring-gray-200 transition-all duration-200 ease-out";
  const nestedBase =
    "absolute top-0 z-50 mt-0 w-48 bg-white shadow-lg rounded-md ring-1 ring-gray-200 transition-all duration-200 ease-out";

  return (
    <div ref={wrapperRef} className="relative">
      <button
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((s) => !s)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex items-center gap-1 rounded px-3 py-2"
      >
        <Link href={`/${lang}/products`} className="flex items-center gap-1">
          <p
            className={clsx(
              "pointer-events-none transition-all select-none",
              isActive && "font-bold text-blue-800",
            )}
          >
            {isRtl ? "محصولات" : "Products"}
          </p>
          <FaChevronRight
            className={clsx(
              "text-xs transition-transform duration-200",
              isOpen
                ? isRtl
                  ? "-rotate-90"
                  : "rotate-90"
                : isRtl
                  ? "rotate-90"
                  : "rotate-0",
            )}
            aria-hidden
          />
        </Link>
      </button>

      {/* Main dropdown */}
      <ul
        role="menu"
        aria-hidden={!isOpen}
        className={clsx(
          dropdownBase,
          mainDropdownPosition,
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0",
        )}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div>
          {categoriesTree.map((mainCat) => {
            const hasChildren = (mainCat.children?.length ?? 0) > 0;
            const isSubOpen = !!openSubmenus[mainCat.id];

            return (
              <li key={mainCat.id} className="group relative">
                <div className="flex items-center justify-between">
                  <Link
                    href={`/${lang}/products?cat=${mainCat.link || ""}`}
                    role="menuitem"
                    className="block flex-1 px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none focus-visible:bg-gray-100"
                  >
                    {isRtl ? mainCat.name_fa : mainCat.name_en}
                  </Link>

                  {hasChildren && (
                    <button
                      aria-haspopup="menu"
                      aria-expanded={isSubOpen}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubmenu(mainCat.id);
                      }}
                      onMouseEnter={() =>
                        setOpenSubmenus((s) => ({ ...s, [mainCat.id]: true }))
                      }
                      onMouseLeave={() =>
                        setOpenSubmenus((s) => ({ ...s, [mainCat.id]: false }))
                      }
                      className="px-2 py-2 hover:bg-gray-50 focus:outline-none"
                    >
                      <FaChevronRight
                        className={clsx(
                          "transition-transform duration-200",
                          isRtl
                            ? isSubOpen
                              ? "rotate-180"
                              : ""
                            : isSubOpen
                              ? "-rotate-90"
                              : "rotate-0",
                        )}
                        aria-hidden
                      />
                    </button>
                  )}
                </div>

                {/* Submenu level 1 */}
                {hasChildren && (
                  <ul
                    role="menu"
                    aria-hidden={!isSubOpen}
                    className={clsx(
                      nestedBase,
                      nestedPosition(),
                      // animate nested open/close with horizontal slide & fade
                      isSubOpen
                        ? "pointer-events-auto translate-x-0 scale-100 opacity-100"
                        : "pointer-events-none -translate-x-2 scale-95 opacity-0",
                    )}
                    onMouseEnter={() =>
                      setOpenSubmenus((s) => ({ ...s, [mainCat.id]: true }))
                    }
                    onMouseLeave={() =>
                      setOpenSubmenus((s) => ({ ...s, [mainCat.id]: false }))
                    }
                  >
                    <div className="max-h-60">
                      {mainCat.children!.map((subCat) => {
                        const hasChildren2 = (subCat.children?.length ?? 0) > 0;
                        const isSubOpen2 = !!openSubmenus[subCat.id];

                        return (
                          <li key={subCat.id} className="relative">
                            <div className="flex items-center justify-between">
                              <Link
                                href={`/${lang}/products?cat=${subCat.id}`}
                                role="menuitem"
                                className="block flex-1 px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none focus-visible:bg-gray-100"
                              >
                                {isRtl ? subCat.name_fa : subCat.name_en}
                              </Link>

                              {hasChildren2 && (
                                <button
                                  aria-haspopup="menu"
                                  aria-expanded={isSubOpen2}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSubmenu(subCat.id);
                                  }}
                                  onMouseEnter={() =>
                                    setOpenSubmenus((s) => ({
                                      ...s,
                                      [subCat.id]: true,
                                    }))
                                  }
                                  onMouseLeave={() =>
                                    setOpenSubmenus((s) => ({
                                      ...s,
                                      [subCat.id]: false,
                                    }))
                                  }
                                  className="px-2 py-2 hover:bg-gray-50 focus:outline-none"
                                >
                                  <FaChevronRight
                                    className={clsx(
                                      "ml-2 transition-transform duration-200",
                                      isRtl
                                        ? isSubOpen2
                                          ? "rotate-180"
                                          : ""
                                        : isSubOpen2
                                          ? "-rotate-90"
                                          : "rotate-0",
                                    )}
                                    aria-hidden
                                  />
                                </button>
                              )}
                            </div>

                            {/* Submenu level 2 */}
                            {hasChildren2 && (
                              <ul
                                role="menu"
                                aria-hidden={!isSubOpen2}
                                className={clsx(
                                  nestedBase,
                                  nestedPosition(),
                                  isSubOpen2
                                    ? "pointer-events-auto translate-x-0 scale-100 opacity-100"
                                    : "pointer-events-none -translate-x-2 scale-95 opacity-0",
                                )}
                                onMouseEnter={() =>
                                  setOpenSubmenus((s) => ({
                                    ...s,
                                    [subCat.id]: true,
                                  }))
                                }
                                onMouseLeave={() =>
                                  setOpenSubmenus((s) => ({
                                    ...s,
                                    [subCat.id]: false,
                                  }))
                                }
                              >
                                <div className="max-h-60">
                                  {subCat.children!.map((deepCat) => (
                                    <li key={deepCat.id}>
                                      <Link
                                        href={`/${lang}/products?cat=${deepCat.id}`}
                                        role="menuitem"
                                        className="block px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none focus-visible:bg-gray-100"
                                      >
                                        {isRtl
                                          ? deepCat.name_fa
                                          : deepCat.name_en}
                                      </Link>
                                    </li>
                                  ))}
                                </div>
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </div>
                  </ul>
                )}
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default ProductsButton;
