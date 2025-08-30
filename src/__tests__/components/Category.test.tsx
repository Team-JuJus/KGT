import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "@/components/categories/CategoryCard";

test("Page", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Category" })
  ).toBeDefined();
});
