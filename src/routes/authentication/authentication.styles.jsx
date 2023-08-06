import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 56.25rem;
  justify-content: space-between;
  margin: 1.875rem auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    margin: 0 auto;
    align-items: center;
  }
`;
