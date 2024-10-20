import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>
        {children}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;