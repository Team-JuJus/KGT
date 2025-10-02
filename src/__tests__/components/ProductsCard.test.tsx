import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "@/components/products/ProductCard";

test("The product title must be a level 3 header", () => {
  render(<Page alt="" image="" link="" title="Test Title" rtl />);
  expect(
    screen.getByRole("heading", { level: 3, name: "Test Title" })
  ).toBeDefined();
});
