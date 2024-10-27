import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Context from "./context/Context";

createRoot(document.getElementById("root")).render(
  <Context>
    <App />
  </Context>
);
