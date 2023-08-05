import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 0.938rem 0;
  font-size: 1.25rem;
  align-items: center;
  justify-content: space-evenly;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 0.938rem;

  img {
    min-width: 75px;
    width: 100%;
    height: 50%;
    border-radius: 0.625rem;
  }

  @media screen and (max-width: 480px) {
    img {
      width: 75%;
      height: 75%;
      max-width: 40px;
    }
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  padding-left: 5px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 0.625rem;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
