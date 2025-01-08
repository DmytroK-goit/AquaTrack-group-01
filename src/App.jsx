import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HeadPage from "./pages/HeadPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/head-page" element={<HeadPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
