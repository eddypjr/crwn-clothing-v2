import Footer from './footer/footer';
import { LayoutContainer } from './layout.styles';
import Navigation from './navigation/navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <Navigation />
        <Outlet />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default Layout;
