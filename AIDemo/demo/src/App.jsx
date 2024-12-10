import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./View/Components/HeaderComponent";
import MainSection from "./View/Components/MainSection";
import LoginPage from "./View/Pages/LoginPage";
import OpretPage from "./View/Pages/OpretPage";

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
