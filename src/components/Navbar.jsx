import { useAuth } from "../context/AuthContext";
import * as _ from "react";
import { NavLink } from "react-router-dom";
import {
  X as CloseIcon,
  Menu as MenuIcon,
  User as UserIcon,
} from "lucide-react";
import { menuItems } from "../data/content";
function Navbar() {
  const { user } = useAuth();
  let [e, t] = _.useState(!1);
  return (
    <nav className="navbar">
      <div className="navbar_wordmark">{"Aumbre"}</div>
      <button
        className="navbar_toggle"
        aria-label={e ? "Close navigation" : "Open navigation"}
        aria-expanded={e}
        onClick={() => t(!e)}
      >
        {e ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div className={`navbar_center ${e ? "open" : ""}`}>
        <div className="navbar_logo_badge">{"à"}</div>
        <ul className="navbar_links">
          <li>
            <NavLink to="/" onClick={() => t(!1)}>
              {"home"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => t(!1)}>
              {"about"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={() => t(!1)}>
              {"menu"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/chefs" onClick={() => t(!1)}>
              {"chefs"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={() => t(!1)}>
              {"gallery"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" onClick={() => t(!1)}>
              {"testimonials"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={() => t(!1)}>
              {"blog"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" onClick={() => t(!1)}>
              {"faq"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => t(!1)}>
              {"contact"}
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="/reservation"
          className="navbar_reserve_btn"
          onClick={() => t(!1)}
        >
          {"Reserve table"}
        </NavLink>
      </div>
      <div className="navbar_profile">
        <NavLink
          to={user ? "/account" : "/login"}
          aria-label={user ? "My account" : "Log in or sign up"}
        >
          <UserIcon />
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
