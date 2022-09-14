import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./pages/Header/Header";
import NavBar from "./routes/NavRoutes";
import * as instaOperations from "./redux/insta-operations";

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
    </div>
  );
}

export default App;
