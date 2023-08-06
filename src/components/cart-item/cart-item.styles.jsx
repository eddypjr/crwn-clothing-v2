import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 5rem;
  margin-bottom: 0.938rem;

  img {
    width: 40%;
    border-radius: 0.625rem;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.625rem 1.25rem;

  span {
    font-size: 1rem;
  }
`;
