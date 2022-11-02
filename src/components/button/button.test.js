import { screen, render } from "@testing-library/react";
import CustomButton from "./button";

it("should render the Button component", () => {
  render(<CustomButton isGoogleSignIn>Sign In With Google</CustomButton>);

  expect(screen.getByText("Sign In With Google")).toBeVisible();
});
