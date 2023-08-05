import { Outlet } from 'react-router-dom';
import Navigation from './navigation/navigation';
import Footer from './footer/footer';

const Layout = () => {
  return (
    <>
      <div>
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
