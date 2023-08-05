import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 0.625rem 0;
  }

  @media screen and (max-width: 800px) {
    padding-bottom: 1.25rem;
    width: 90%;

    button {
      width: 100%;
    }
  }
`;
