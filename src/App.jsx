import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import TrackerPage from "./pages/TrackerPage/TrackerPage";
import SharedLayout from "./components/SharedLayout";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { countUser } from "./redux/UserAuth/operations";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(countUser());
  });

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="signup"
          element={token ? <Navigate to="/tracker" /> : <SignUpPage />}
        />
        <Route
          path="signin"
          element={token ? <Navigate to="/tracker" /> : <SignInPage />}
        />
        <Route
          path="tracker"
          element={
            <PrivateRoute component={<TrackerPage />} redirectTo="/signin" />
          }
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
