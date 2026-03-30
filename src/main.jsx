import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import "./assets/sass/main.scss";
import { CardProvider } from "./contexts/CartContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CardProvider>
      <App />
    </CardProvider>
  </BrowserRouter>,
);
