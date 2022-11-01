import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./custom-button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export const CustomButton = ({ children, buttonType, ...props }) => {
  const CustomButtonContainer = getButton(buttonType);
  return (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
  )
};

export default CustomButton;
