import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import BrawlStars from './components/BrawlStars';
import ClashRoyale from './components/ClashRoyale';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/tableau-de-bord">Tableau de bord</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/brawl-stars">Brawl Stars</Link>
          <Link to="/clash-royale">Clash Royale</Link>
        </nav>

        <Routes>
          <Route path="/tableau-de-bord" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/brawl-stars" element={<BrawlStars />} />
          <Route path="/clash-royale" element={<ClashRoyale />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
