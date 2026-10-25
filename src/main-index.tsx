import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import IndexPage from "./pages/IndexPage";
import "./styles/tokens.css";
import "./styles/aos.css";
import "./styles/style.css";
import "./styles/theme-layer.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IndexPage />
  </StrictMode>
);

