import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 5%;

  h2 {
    margin: 0.625rem 0;
  }

  @media screen and (max-width: 800px) {
    padding-bottom: 1.25rem;
    width: 90%;
    margin-right: 0;

    button {
      width: 100%;
    }
  }
`;
