import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 10.313rem;
  width: auto;
  height: 3.125rem;
  letter-spacing: 0.031rem;
  padding: 0 2.188rem 0 2.188rem;
  font-size: 0.938rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Titillium Web';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 0.063rem solid black;
  border-radius: 0.625rem;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  margin-left: 1rem;
  border-radius: 0.625rem;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
