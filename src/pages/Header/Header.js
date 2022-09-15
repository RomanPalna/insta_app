import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../pictures/logo.png";
import user from "../../pictures/user.png";

const ROUTES = [
  ["likes", "Likes"],
  ["followers", "Followers"],
  ["automatic", "Auto Likes"],
  ["views", "Views"],
  ["comments", "Comment"],
];

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
        {ROUTES.map(([route, name]) => (
          <NavLink
            to={route}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            {name}
          </NavLink>
        ))}
      </div>

      <Link to="user" className="header__user">
        <img src={user} alt="user" />
      </Link>
    </div>
  );
}
