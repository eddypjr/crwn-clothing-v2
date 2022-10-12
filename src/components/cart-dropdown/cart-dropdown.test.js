import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartDropdown from "./cart-dropdown";

it("should render the CartDropdown component", () => {
  render(
    <BrowserRouter>
      <CartDropdown />
    </BrowserRouter>
  );

  expect(screen.getByText("Your cart is empty")).toBeVisible();
  expect(screen.getByText("GO TO CHECKOUT")).toBeInTheDocument();
});
