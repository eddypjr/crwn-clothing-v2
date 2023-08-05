import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item';

import {
  Container,
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <Container>
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
        <Total>TOTAL: ${cartTotal}</Total>
      </CheckoutContainer>
    </Container>
  );
};

export default Checkout;
