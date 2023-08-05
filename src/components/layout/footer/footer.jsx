import {
  CopyrightContainer,
  FooterLink,
  FooterContainer,
  FooterLinksContainer,
  LogoContainer,
  Logo,
  SocialLogoContainer,
} from './footer.styles';
import Instagram from '../../../assets/Instagram.svg';
import Twitter from '../../../assets/Twitter.svg';
import Youtube from '../../../assets/Youtube.svg';
import CrownLogo from '../../../assets/crown.svg';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLinksContainer>
          <LogoContainer>
            <FooterLink to="/">
              <Logo src={CrownLogo} className="logo" alt="logo" />
            </FooterLink>
          </LogoContainer>
          <CopyrightContainer>
            <div>&#169; Crwn Clothing. </div>
            <div>All rights reserved</div>
          </CopyrightContainer>
          <SocialLogoContainer>
            <FooterLink to="https://www.instagram.com/">
              <img src={Instagram} alt="instagram-link" />
            </FooterLink>
            <FooterLink to="https://twitter.com/">
              <img src={Twitter} alt="twitter-link" />
            </FooterLink>
            <FooterLink to="https://www.youtube.com/">
              <img src={Youtube} alt="youtube-link" />
            </FooterLink>
          </SocialLogoContainer>
        </FooterLinksContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
