import { NavLink } from "react-router-dom";
import logo from "../../pictures/logo.png";

export default function Header() {
  return (
    <div>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <NavLink to="likes">Buy Instagram Likes</NavLink>
      <NavLink to="followers">Buy Instagram Followers</NavLink>
      <NavLink to="views">Buy Instagram Views</NavLink>
      <NavLink to="comments">Buy Instagram Сomments</NavLink>
      <NavLink to="automatic">Buy Instagram Automatic</NavLink>
    </div>
  );
}
