import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin-bottom: 2%;
  @media screen and (max-width: 800px) {
    align-items: center;
    margin-bottom: 5%;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 6%;
  }
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 1.563rem;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.25rem;
  width: 100%;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.938rem;
    grid-row-gap: 1.563rem;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.563rem;
  }
`;
