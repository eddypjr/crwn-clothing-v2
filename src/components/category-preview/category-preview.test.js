import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CategoryPreview from "./category-preview";

it("Renders the category preview for the correct product", () => {
  const mockProduct = [
    {
      id: 4,
      imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
      name: "Grey Brim",
      price: 25,
    },
  ];

  render(
    <BrowserRouter>
      <CategoryPreview title="hats" products={mockProduct} />
    </BrowserRouter>
  );

  expect(screen.getByText("HATS")).toBeVisible();
  expect(screen.getByText("Grey Brim")).toBeVisible();
});
