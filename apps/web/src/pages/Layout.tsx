// TODO: It is temporal file for routes other pages
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <nav
        style={{
          display: 'flex',
          width: '100vw',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <NavLink to="/">to home</NavLink>
        <NavLink to="/login">to login</NavLink>
        <NavLink to="/interview">to interview</NavLink>
        <NavLink to="/term-and-services">to term-and-services</NavLink>
        <NavLink to="/tips-for-interview">to tips-for-interview</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
