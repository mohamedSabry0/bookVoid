import { Outlet, NavLink } from 'react-router-dom';
import profileIcon from '../images/icons8-user-50.png';

const Layout = () => (
  <>
    <nav>
      <div>
        <h1 className="logo">Book Void</h1>
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
      </div>
      <div className="profile-button">
        <img src={profileIcon} alt="profile icon" />
      </div>
    </nav>
    <Outlet />
  </>

);

export default Layout;
