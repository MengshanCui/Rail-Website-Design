// // main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Research from "./pages/Research";
import Members from "./pages/Members";
import Teaching from "./pages/Teaching";
import Publications from "./pages/Publications";
import Resources from "./pages/Resources";
import { HeroUIProvider, ToastProvider } from "@heroui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ToastProvider />
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/news" element={<News />} />
          <Route path="/research" element={<Research />} />
          <Route path="/members" element={<Members />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </HeroUIProvider>
  </React.StrictMode>
);
