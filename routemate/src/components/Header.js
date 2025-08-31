import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="RouteMate Logo" />
        <span>RouteMate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className='link'>Home</NavLink>
        <NavLink to="/products" className='link'>Products</NavLink>
        <NavLink to="/contact" className='link'>Contact</NavLink>
        <NavLink to="/admin" className='link'>Login</NavLink>
      </nav>
    </header>
  )
}
