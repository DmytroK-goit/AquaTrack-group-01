import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import TrackerPage from "./pages/TrackerPage/TrackerPage";
import SharedLayout from "./components/SharedLayout";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import UniversalModal from "./components/TrackerPage/modal/UniversalModal/UniversalModal";
function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(refresh());
    }
  }, [dispatch, token]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route
            path="tracker"
            element={
              <PrivateRoute component={<TrackerPage />} redirectTo="/signin" />
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <UniversalModal />
    </>
  );
}

export default App;
