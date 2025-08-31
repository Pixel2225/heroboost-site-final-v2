import Layout from "./components/Layout";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader"; // ta barre de navigation
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import BrawlStars from "./components/BrawlStars";
import ClashRoyale from "./components/ClashRoyale";
import "./index.css"; // important pour appliquer les styles globaux Tailwind

function App() {
  return (
    <Router>
      <Layout>
        <SiteHeader /> {/* Ta barre de navigation */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/brawl-stars" element={<BrawlStars />} />
          <Route path="/clash-royale" element={<ClashRoyale />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
