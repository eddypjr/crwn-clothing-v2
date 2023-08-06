import styled from 'styled-components';
import Button from '../button/button';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 15rem;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border: 1px solid black;
  background-color: white;
  top: 6%;
  right: 2.5rem;
  z-index: 5;
`;

export const CartDropdownButton = styled(Button)`
  margin-top: auto;
`;

CartDropdownButton.displayName = 'CartDropdownButton';

export const EmptyMessageContainer = styled.span`
  font-size: 1.125rem;
  margin: 3.125rem auto;
`;

EmptyMessageContainer.displayName = 'EmptyMessageContainer';

export const CartItemsContainer = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
