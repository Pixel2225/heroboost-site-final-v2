import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Trophy, Star, Zap, Users, MessageCircle, Mail, Clock, Shield } from 'lucide-react'
import heroboostLogo from './assets/1000009474.png'
import backgroundVideo from './assets/background-video.mp4'
import Dashboard from './components/Dashboard'
import AdminDashboard from './components/AdminDashboard'
import ClashRoyale from './components/ClashRoyale'
import BrawlStars from './components/BrawlStars'
import Login from './components/Login'
import Register from './components/Register'
import './App.css'

function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 nav-glass">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={heroboostLogo} alt="Heroboost" className="h-10 w-auto" />
            <span className="text-white font-bold text-xl">Heroboost</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-white hover:text-green-400 transition-colors">Accueil</a>
            <a href="/#games" className="text-white hover:text-green-400 transition-colors">Jeux</a>
            <a href="/#contact" className="text-white hover:text-green-400 transition-colors">Contact</a>
            <a href="/dashboard" className="text-white hover:text-green-400 transition-colors">Tableau de bord</a>
            <Button className="heroboost-gradient hover:heroboost-glow">Paiement</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function PromoBanner() {
  return (
    <div className="promo-banner text-white text-center py-2 text-sm font-medium">
      🎉 Promo : -10% avec le code HERO10 (cette semaine)
    </div>
  )
}

function SupportInfo() {
  return (
    <div className="bg-gray-800 text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <Shield className="w-4 h-4 mr-1" />
            Support 24/7
          </span>
          <span className="flex items-center">
            <MessageCircle className="w-4 h-4 mr-1" />
            Discord : Heroboost#1234
          </span>
        </div>
        <div className="flex items-center">
          <Mail className="w-4 h-4 mr-1" />
          contact@heroboost.gg
        </div>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo d'arrière-plan */}
      <video 
        className="video-background" 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
      >
        <source src={backgroundVideo} type="video/mp4" />
        {/* Fallback avec arrière-plan animé si la vidéo ne charge pas */}
        <div className="absolute inset-0 heroboost-gradient-animated"></div>
      </video>
      
      {/* Arrière-plan de secours avec dégradé animé */}
      <div className="absolute inset-0 heroboost-gradient-animated video-fallback"></div>
      
      <div className="hero-overlay absolute inset-0"></div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 heroboost-text-shadow">
          Bienvenue sur <span className="text-green-400">Heroboost</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 heroboost-text-shadow max-w-3xl mx-auto">
          Boostez vos comptes et vos performances sur vos jeux préférés
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="heroboost-gradient hover:heroboost-glow text-lg px-8 py-4">
            <Zap className="w-5 h-5 mr-2" />
            Découvrir les services
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
            <MessageCircle className="w-5 h-5 mr-2" />
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  )
}

function GamesSection() {
  const games = [
    {
      id: 'clash-royale',
      title: 'Clash Royale',
      description: 'Montez en trophées rapidement',
      price: 'À partir de 6.69€',
      gradient: 'from-blue-600 to-purple-600',
      offers: '1.2k offres'
    },
    {
      id: 'brawl-stars',
      title: 'Brawl Stars',
      description: 'Boostez vos trophées',
      price: 'À partir de 2.69€',
      gradient: 'from-yellow-500 to-orange-600',
      offers: '850 offres'
    }
  ]

  return (
    <section id="games" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choisissez votre <span className="text-green-400">Jeu</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sélectionnez le jeu pour lequel vous souhaitez un boost de trophées
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {games.map((game) => (
            <Card 
              key={game.id} 
              className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300 cursor-pointer group overflow-hidden hover:heroboost-glow"
              onClick={() => window.location.href = `/${game.id}`}
            >
              <div className={`h-48 bg-gradient-to-br ${game.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-gray-900 font-bold">
                    {game.offers}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{game.title}</h3>
                  <p className="text-white text-opacity-90">{game.description}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Prix</p>
                    <p className="text-green-400 font-bold text-lg">{game.price}</p>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600 group-hover:scale-105 transition-transform">
                    Voir les boosts
                    <Trophy className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nous <span className="text-green-400">Contacter</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Une question ? Besoin d'aide ? Notre équipe est là pour vous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="pt-8">
              <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Discord</h3>
              <p className="text-gray-300">Heroboost#1234</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="pt-8">
              <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Email</h3>
              <p className="text-gray-300">contact@heroboost.gg</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="pt-8">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Support</h3>
              <p className="text-gray-300">24/7 Disponible</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img src={heroboostLogo} alt="Heroboost" className="h-8 w-auto" />
            <span className="font-bold text-lg">Heroboost</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">© 2024 Heroboost. Tous droits réservés.</p>
            <p className="text-sm text-gray-500">Service de boost gaming professionnel</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <PromoBanner />
        <SupportInfo />
        <Navigation />
        
        <Routes>
          <Route path="/" element={
            <>
        <HeroSection />
        <GamesSection />
        <ContactSection />
            </>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/clash-royale" element={<ClashRoyale />} />
          <Route path="/brawl-stars" element={<BrawlStars />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App

