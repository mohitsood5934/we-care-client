import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import WeCareAssistant from "./components/WeCareAssistant";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const userProfile = {
    name: "Mohit",
  };

  const { name } = userProfile;

  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home userProfile={userProfile} />} />
            <Route path="/chat" element={<WeCareAssistant name={name} />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
