import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 1.563rem;
  display: flex;
  justify-content: center;
  // align-items: center;
`;

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3.125rem auto 0;

  @media screen and (max-width: 800px) {
    width: 90%;
    margin-top: 2%;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    width: 90%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 0.625rem 0;
  border-bottom: 1px solid darkgrey;
  display: flex;
  justify-content: space-between;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  justify-content: center;
  width: 23%;

  &:last-child {
    width: 6%;
  }

  @media screen and (max-width: 800px) {
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    font-weight: 700;
    &:last-child {
      width: 11%;
    }
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  margin-bottom: 2%;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
