import { Routes, Route } from "react-router-dom";
import Likes from "../pages/Likes/Likes";

export default function NavBar() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Main</div>} />
        <Route path="likes" element={<Likes />} />
        <Route path="followers" element={<div>Buy Instagram Followers</div>} />
        <Route path="views" element={<div>Buy Instagram Views</div>} />
        <Route path="comments" element={<div>Buy Instagram Сomments</div>} />
        <Route
          path="automatic"
          element={<div>Automatic Instagram Likes</div>}
        />
        <Route path="user" element={<div>User</div>} />
      </Routes>
    </>
  );
}
