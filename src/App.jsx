import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import SiteHeader from "./components/SiteHeader"; // (déjà utilisé par Layout)

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import BrawlStars from "./components/BrawlStars";
import ClashRoyale from "./components/ClashRoyale";

import "./index.css";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Accueil = Clash Royale */}
          <Route path="/" element={<Navigate to="/clash-royale" replace />} />

          <Route path="/clash-royale" element={<ClashRoyale />} />
          <Route path="/brawl-stars" element={<BrawlStars />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 404 simple */}
          <Route path="*" element={<div>Page introuvable</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}
