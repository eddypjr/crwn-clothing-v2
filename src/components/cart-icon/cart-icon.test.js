import { render, screen } from "@testing-library/react";
import CartIcon from "./cart-icon";

it("The CartIcon renders with an initial cartCount of 0", () => {
  render(<CartIcon />);

  expect(screen.getByText("0")).toBeVisible();
});
