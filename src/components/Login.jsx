import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import heroboostLogo from '../assets/1000009474.png'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulation d'une connexion
    setTimeout(() => {
      // Stocker les informations de connexion dans localStorage
      const userData = {
        email: email,
        name: email.split('@')[0],
        isLoggedIn: true,
        loginTime: new Date().toISOString()
      }
      localStorage.setItem('heroboost_user', JSON.stringify(userData))
      
      // Redirection vers le tableau de bord
      window.location.href = '/dashboard'
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 heroboost-gradient-animated opacity-20"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Bouton retour */}
        <Button 
          variant="ghost" 
          className="text-white hover:text-green-400 mb-6"
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Button>

        <Card className="bg-gray-800/95 border-gray-700 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <img src={heroboostLogo} alt="Heroboost" className="h-16 w-auto" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              Connexion à <span className="text-green-400">Heroboost</span>
            </CardTitle>
            <p className="text-gray-400">
              Accédez à votre tableau de bord personnel
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-400"
                    required
                  />
                </div>
              </div>

              {/* Mot de passe */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded" />
                  <span className="text-sm text-gray-400">Se souvenir de moi</span>
                </label>
                <a href="#" className="text-sm text-green-400 hover:text-green-300">
                  Mot de passe oublié ?
                </a>
              </div>

              {/* Bouton de connexion */}
              <Button 
                type="submit" 
                className="w-full heroboost-gradient hover:heroboost-glow text-white font-bold py-3"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Connexion en cours...
                  </div>
                ) : (
                  'Se connecter'
                )}
              </Button>

              {/* Lien vers inscription */}
              <div className="text-center">
                <p className="text-gray-400">
                  Pas encore de compte ?{' '}
                  <a href="/register" className="text-green-400 hover:text-green-300 font-medium">
                    Créer un compte
                  </a>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Avantages de la connexion */}
        <div className="mt-8 text-center">
          <h3 className="text-white font-semibold mb-4">Pourquoi créer un compte ?</h3>
          <div className="grid grid-cols-1 gap-3 text-sm text-gray-300">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              Suivi en temps réel de vos commandes
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              Historique complet de vos boosts
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              Support client prioritaire
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              Offres exclusives et codes promo
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

