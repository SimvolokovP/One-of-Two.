import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../utils/data";

import "./MobileBar.css";

export default function MobileBar() {
  return (
    <nav className="mobile-bar">
      <ul className="list-reset">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "mobile-bar__link active" : "mobile-bar__link"
              }
              to={link.path}
            >
              {<link.icon size={30} />}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
