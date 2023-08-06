import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.75rem;
  margin-left: 5%;

  h2 {
    margin: 0.625rem 0;
  }

  @media screen and (max-width: 800px) {
    padding-bottom: 1.25rem;
    width: 90%;
    margin-left: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    button {
      width: 100%;
    }
  }
`;

export const Underline = styled.div`
width: 100%;
margin: 5% 0;
height: 0.063rem;
  @media screen and (max-width: 800px) {
    background-color: #e9ebee;
  }
`;