import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ModalProvider } from "./context/ModalContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ModalProvider>
        <Toaster />
        <App />
      </ModalProvider>
    </BrowserRouter>
  </Provider>
);
