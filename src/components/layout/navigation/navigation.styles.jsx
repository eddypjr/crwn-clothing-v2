import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 4.375rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.063rem solid #e9ebee;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 3.75rem;
    padding: 0 5%;
  }
`;

export const LogoContainer = styled(Link)`
  margin-left: 5%;
  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 5%;

  @media screen and (max-width: 800px) {
    width: 80%;
    margin-right: 0;
  }
`;

export const NavLink = styled(Link)`
  padding: 0.625rem 0.938rem;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding: 0.438rem 0.75rem;
  }
`;
