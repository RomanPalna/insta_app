import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as instaOperations from "./redux/insta-operations";
import Header from "./pages/Header/Header";
import NavBar from "./routes/NavRoutes";
import InputComment from "./components/InputComment/InputComment";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(instaOperations.fetchInsta());
    console.log("trigger");
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <InputComment />
    </div>
  );
}

export default App;
