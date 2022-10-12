import { render, screen } from "@testing-library/react";

import CartItem from "./cart-item";

it("should render the correct CartItem component if there is items in the cart", () => {
  const mockCartItem = {
    id: 4,
    imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
    name: "Grey Brim",
    price: 25,
    quantity: 2,
  };

  render(<CartItem key={mockCartItem.id} item={mockCartItem} />);

  expect(screen.getByText("2 x $25")).toBeVisible();
});
