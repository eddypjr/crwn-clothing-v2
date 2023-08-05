import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 2.813rem;
  height: 2.813rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 0.625rem;
  font-weight: bold;
  bottom: 12px;
`;
