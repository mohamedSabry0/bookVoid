import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => (
  <>
    <nav>
      <h1 className="heading">Book Void</h1>
      <ul>
        <li>
          <NavLink to="/">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="categories">
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>

);

export default Layout;
