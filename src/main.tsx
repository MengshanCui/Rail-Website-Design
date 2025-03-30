// // main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ 路由功能
import App from "./App.tsx";
import News from "./pages/News.tsx"; // ✅ 你的新闻页面
import Research from "./pages/Research.tsx"; // ✅ 你的研究页面
import Members from "./pages/Members.tsx"; // ✅ 你的成员页面
import Teaching from "./pages/Teaching.tsx"; // ✅ 你的教学页面
import Publications from "./pages/Publications.tsx"; // ✅ 你的出版物页面
import Resources from "./pages/Resources.tsx"; // ✅ 你的资源页面
import "./index.css";
import { HeroUIProvider, ToastProvider } from "@heroui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ToastProvider />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/news" element={<News />} /> {/* ✅ 访问 /news 显示 News 页面 */}
          <Route path="/research" element={<Research />} />
          <Route path="/members" element={<Members />} />
          <Route path="/alumni" element={<Members />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  </React.StrictMode>
);
