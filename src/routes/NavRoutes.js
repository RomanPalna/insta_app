import { Routes, Route } from "react-router-dom";
import Service from "../pages/Service/Service";

export default function NavBar() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Main</div>} />
        <Route path="likes" element={<Service service="likes" />} />
        <Route path="followers" element={<Service service="followers" />} />
        <Route path="views" element={<Service service="views" />} />
        <Route path="comments" element={<Service service="comments" />} />
        <Route path="automatic" element={<Service service="autoLikes" />} />
        <Route path="user" element={<div>User</div>} />
      </Routes>
    </>
  );
}
