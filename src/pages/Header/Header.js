import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../pictures/logo.png";
import user from "../../pictures/user.png";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  let buttonMenu = "hamburger";
  if (menuActive) {
    buttonMenu += " active_btn";
  }

  return (
    <div className="header">
      <button type="button" className={buttonMenu} onClick={handleClick}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

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

      <Link to="user" className="header__user">
        <img src={user} alt="user" />
      </Link>
    </div>
  );
}
