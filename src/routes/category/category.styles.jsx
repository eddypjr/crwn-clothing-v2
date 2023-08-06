import styled from 'styled-components';

export const CategoryContainer = styled.div`
  width: 100%;
  display: grid;
  margin-bottom: 2%;

  @media screen and (max-width: 800px) {
    margin-bottom: 5%;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 6%;
  }
`;

export const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.25rem;
  row-gap: 3.125rem;
  justify-items: center;
  height: 100%;
  padding: 0 5%;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.938rem;
    grid-row-gap: 1.563rem;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.563rem;
    width: 100%;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.563rem;
  text-align: left;
  margin-left: 5%;

  @media screen and (max-width: 800px) {
    text-align: center;
    margin-left: 0;
  }
`;
