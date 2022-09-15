import { Routes, Route } from "react-router-dom";
import Service from "../pages/Service/Service";

const ROUTES = {
  LIKES: "likes",
};

export default function NavBar() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Main</div>} />
        <Route path={ROUTES.LIKES} element={<Service service="likes" />} />
        <Route path="followers" element={<Service service="followers" />} />
        <Route path="views" element={<Service service="views" />} />
        <Route path="comments" element={<Service service="comments" />} />
        <Route path="automatic" element={<Service service="autoLikes" />} />
      </Routes>
    </>
  );
}
