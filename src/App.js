// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RahulFantasy from './Pages/RahulFantasy';
import About from './Pages/About';
import Features from "./Pages/Features";
import Contest from "./Pages/Contest";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/Terms_and_Conditions";
import FantasyPoint from "./Pages/FantasyPoint";
import Dashboard from "./Pages/Dashboard";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RahulFantasy />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/Contest" element={<Contest />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Terms_and_Conditions" element={<TermsAndConditions />} />
        <Route path="/FantasyPpoint" element={<FantasyPoint />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
