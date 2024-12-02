import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./HeaderComponent";
import MainSection from "./MainSection";
import LoginPage from "./LoginPage";
import OpretPage from "./OpretPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/opret" element={<OpretPage />} />
      </Routes>
    </Router>
  );
};

export default App;
