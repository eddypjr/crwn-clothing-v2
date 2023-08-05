import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  CheckoutItemContainer,
  BaseSpan,
  ImageContainer,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, subtractItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const subtractItemHandler = () => subtractItemFromCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={subtractItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>$ {price}</BaseSpan>
      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
