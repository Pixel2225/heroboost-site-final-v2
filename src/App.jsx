import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'; // Assurez-vous que ce composant existe
import Games from './components/Games'; // Assurez-vous que ce composant existe
import Contact from './components/Contact'; // Assurez-vous que ce composant existe
import Dashboard from './components/Dashboard'; // Assurez-vous que ce composant existe
import Login from './components/Login';
import Register from './components/Register';
import BrawlStars from './components/BrawlStars';
import ClashRoyale from './components/ClashRoyale';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Vous pouvez mettre votre barre de navigation ici si vous en avez une */}
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/jeux">Jeux</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/tableau-de-bord">Tableau de bord</Link>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jeux" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
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
