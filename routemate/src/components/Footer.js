import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <Link to="/">&copy; {new Date().getFullYear()} RouteMate. All rights reserved.</Link>
    </footer>
  )
}
