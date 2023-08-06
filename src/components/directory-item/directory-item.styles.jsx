import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 3.125rem 3.438rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 0.625rem;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: 700;
    margin: 0 0.375rem 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 1rem;
  }

  @media screen and (max-width: 800px) {
    padding: 0.938rem 1.25rem;
  }

  @media screen and (max-width: 480px) {
    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.875rem;
    }
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 42vh;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 0.75rem;
  margin: 0 0.469rem 0.938rem;
  overflow: hidden;
  &:first-child {
    margin-right: 0.469rem;
  }
  &:last-child {
    margin-left: 0.469rem;
  }
  &:hover {
    cursor: pointer;
    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    ${Body} {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 480px) {
    height: 26vh;
    min-width: 45%;
  }
`;
