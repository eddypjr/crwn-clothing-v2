import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.25rem;
  row-gap: 3.125rem;
  height: 100%;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 1.563rem;
  text-align: center;
`;
