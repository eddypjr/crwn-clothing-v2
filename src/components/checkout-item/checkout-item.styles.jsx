import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 0.938rem 0;
  font-size: 1.25rem;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 0.938rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
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
