import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 40vh;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 0.313rem;
    border-radius: 1.173rem;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 32vh;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    height: 100%;

    button {
      top: 70%;
    }
  }

  @media screen and (max-width: 480px) {
    button {
      top: 70%;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 0.938rem;
`;

export const Price = styled.span`
  width: 10%;
`;
