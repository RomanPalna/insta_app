import { NavLink, Link } from "react-router-dom";
import logo from "../../pictures/logo.png";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="logo" />
      </Link>
      <div className="header__nav">
        <NavLink
          to="likes"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Buy Instagram Likes
        </NavLink>
        <NavLink
          to="followers"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Buy Instagram Followers
        </NavLink>
        <NavLink
          to="views"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Buy Instagram Views
        </NavLink>
        <NavLink
          to="comments"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Buy Instagram Сomments
        </NavLink>
        <NavLink
          to="automatic"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Buy Instagram Automatic
        </NavLink>
      </div>
    </div>
  );
}
