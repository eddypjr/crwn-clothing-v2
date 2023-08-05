import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3.75rem;
  justify-content: space-around;
  background-color: #201b21;
  color: #d9dbe1;
  font-size: 0.875rem;
  margin-top: auto;
  bottom: 0;

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.625rem;
    height: auto;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5%;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const Logo = styled.img`
width: 40px;
height: 25px;
`

export const CopyrightContainer = styled.div`
  display: flex;
  color: #d9dbe1;

  @media screen and (max-width: 480px) {
    order: 3;
    padding: 0.313rem 0rem;
    flex-direction: column;
  }
`;

export const SocialLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterLink = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
`;
