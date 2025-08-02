import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import WeCareAssistant from "./components/WeCareAssistant";
import KeyMetricsPage from "./pages/KeyMetricsPage";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const App = () => {
  const userProfile = {
    name: "Mohit",
    role: "admin",
  };

  const { name = "", role = "" } = userProfile;
  // const IS_ADMIN_USER = role === "admin";
    const IS_ADMIN_USER = false;

  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home userProfile={userProfile} />} />
            <Route
              path="/chat/:channelId"
              element={<WeCareAssistant name={name} />}
            />
            <Route path="/key-metrics" element={<KeyMetricsPage />} />
            <Route
              path="/admin-dashboard"
              element={<Dashboard isAdminUser={IS_ADMIN_USER} />}
            />
            <Route
              path="/user-dashboard"
              element={<Dashboard isAdminUser={IS_ADMIN_USER} />}
            />
              <Route
              path="/admin-dashboard"
              element={<Dashboard isAdminUser={IS_ADMIN_USER} />}
            />
            <Route
              path="/user-dashboard"
              element={<Dashboard isAdminUser={IS_ADMIN_USER} />}
            />
          </Routes>
          <Footer isAdminUser={IS_ADMIN_USER} />
        </main>
      </div>
    </Router>
  );
};

export default App;
