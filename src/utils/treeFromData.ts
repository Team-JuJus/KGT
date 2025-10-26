import { Category, CategoryRaw } from "@/types";

// utils/buildCategoryTree.js
export function buildCategoryTree(categories: CategoryRaw[]) {
  const categoryMap = new Map();
  const tree: Category[] = [];

  // First pass: Create a map of all categories by ID
  categories.forEach((cat) => {
    categoryMap.set(cat.id, { ...cat, children: [] });
  });

  // Second pass: Link children to parents
  categories.forEach((cat) => {
    if (cat.parent_id !== null) {
      const parent = categoryMap.get(cat.parent_id);
      if (parent) {
        parent.children.push(categoryMap.get(cat.id));
      }
    } else {
      tree.push(categoryMap.get(cat.id));
    }
  });

  return tree;
}
