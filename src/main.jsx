import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import AddcontextProvider from "./Components/Context/AddContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AddcontextProvider>
      <App />
      <ToastContainer />
    </AddcontextProvider>
  </StrictMode>
);
