import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff, Check } from 'lucide-react'
import heroboostLogo from '../assets/1000009474.png'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas')
      return
    }

    if (!acceptTerms) {
      alert('Veuillez accepter les conditions d\'utilisation')
      return
    }

    setIsLoading(true)
    
    // Simulation d'une inscription
    setTimeout(() => {
      // Stocker les informations de connexion dans localStorage
      const userData = {
        email: formData.email,
        name: formData.name,
        isLoggedIn: true,
        loginTime: new Date().toISOString(),
        isNewUser: true
      }
      localStorage.setItem('heroboost_user', JSON.stringify(userData))
      
      // Redirection vers le tableau de bord
      window.location.href = '/dashboard'
    }, 1500)
  }

  const passwordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const getPasswordStrengthText = (strength) => {
    switch (strength) {
      case 0:
      case 1: return { text: 'Faible', color: 'text-red-400' }
      case 2: return { text: 'Moyen', color: 'text-yellow-400' }
      case 3: return { text: 'Bon', color: 'text-blue-400' }
      case 4: return { text: 'Excellent', color: 'text-green-400' }
      default: return { text: '', color: '' }
    }
  }

  const strength = passwordStrength(formData.password)
  const strengthInfo = getPasswordStrengthText(strength)

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-8">
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
              Rejoindre <span className="text-green-400">Heroboost</span>
            </CardTitle>
            <p className="text-gray-400">
              Créez votre compte pour accéder à tous nos services
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleRegister} className="space-y-6">
              {/* Nom */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Nom d'utilisateur</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom d'utilisateur"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-400"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
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
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
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
                {formData.password && (
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`h-1 w-6 rounded ${
                            level <= strength ? 'bg-green-400' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className={`text-xs ${strengthInfo.color}`}>
                      {strengthInfo.text}
                    </span>
                  </div>
                )}
              </div>

              {/* Confirmation mot de passe */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white">Confirmer le mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <div className="flex items-center text-green-400 text-xs">
                    <Check className="w-3 h-3 mr-1" />
                    Les mots de passe correspondent
                  </div>
                )}
              </div>

              {/* Conditions d'utilisation */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-400">
                  J'accepte les{' '}
                  <a href="#" className="text-green-400 hover:text-green-300">
                    conditions d'utilisation
                  </a>{' '}
                  et la{' '}
                  <a href="#" className="text-green-400 hover:text-green-300">
                    politique de confidentialité
                  </a>
                </label>
              </div>

              {/* Bouton d'inscription */}
              <Button 
                type="submit" 
                className="w-full heroboost-gradient hover:heroboost-glow text-white font-bold py-3"
                disabled={isLoading || !acceptTerms}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Création du compte...
                  </div>
                ) : (
                  'Créer mon compte'
                )}
              </Button>

              {/* Lien vers connexion */}
              <div className="text-center">
                <p className="text-gray-400">
                  Déjà un compte ?{' '}
                  <a href="/login" className="text-green-400 hover:text-green-300 font-medium">
                    Se connecter
                  </a>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Register

