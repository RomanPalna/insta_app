import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as instaOperations from "../../redux/insta-operations";

export default function Likes() {
  const dispatch = useDispatch();

  const likes = useSelector((state) => state.service);

  if (likes) {
    console.log(likes);
  }

  useEffect(() => {
    dispatch(instaOperations.fetchInsta());
  }, [dispatch]);

  return <div>Likes</div>;
}
