import { NavLink } from 'react-router-dom';
import './Navbar.scss';  // File SCSS cho Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div><NavLink to="/" className="logo">MyWebsite</NavLink></div>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
