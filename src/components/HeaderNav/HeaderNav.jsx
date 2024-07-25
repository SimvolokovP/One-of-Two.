import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/data";

import './HeaderNav.css';

export default function HeaderNav() {
  return (
    <nav className="header-nav">
      <ul className="list-reset">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink className={ ({isActive}) => isActive ? "header-link active" : "header-link"} to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
