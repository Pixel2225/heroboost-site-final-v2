import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Trophy, ArrowLeft, Star, Zap } from 'lucide-react'

function BrawlStars() {
  const [currentTrophies, setCurrentTrophies] = useState([0])
  const [desiredTrophies, setDesiredTrophies] = useState([1000])
  const [totalPrice, setTotalPrice] = useState('2.69')

  // Prix pour 1000 trophées en dessous de 2.69€
  const priceFor1000 = 2.65
  const pricePerTrophy = priceFor1000 / 1000

  React.useEffect(() => {
    const trophyDifference = Math.max(0, desiredTrophies[0] - currentTrophies[0])
    const newTotal = (trophyDifference * pricePerTrophy).toFixed(2)
    setTotalPrice(newTotal)
  }, [currentTrophies, desiredTrophies, pricePerTrophy])

  const trophyDifference = Math.max(0, desiredTrophies[0] - currentTrophies[0])

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Button 
              variant="ghost" 
              className="text-white hover:text-green-400"
              onClick={() => window.location.href = '/'}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
            
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="text-white font-bold text-xl">Brawl Stars</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Star className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Brawl Stars
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Boostez vos trophées et dominez l'arène avec vos brawlers favoris
            </p>
            <Badge className="bg-white text-orange-600 font-bold text-lg px-4 py-2">
              850 offres disponibles
            </Badge>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Calculateur de <span className="text-yellow-400">Trophées</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Configurez votre boost et obtenez un prix instantané
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Configuration */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
                    Configuration du boost
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Trophées actuels */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-white font-medium">Trophées actuels</label>
                      <span className="text-white font-bold text-xl">{currentTrophies[0]}</span>
                    </div>
                    <Slider
                      value={currentTrophies}
                      onValueChange={setCurrentTrophies}
                      max={50000}
                      min={0}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>0</span>
                      <span>50 000</span>
                    </div>
                  </div>

                  {/* Trophées désirés */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-white font-medium">Trophées désirés</label>
                      <span className="text-white font-bold text-xl">{desiredTrophies[0]}</span>
                    </div>
                    <Slider
                      value={desiredTrophies}
                      onValueChange={setDesiredTrophies}
                      max={50000}
                      min={currentTrophies[0]}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>{currentTrophies[0]}</span>
                      <span>50 000</span>
                    </div>
                  </div>

                  {/* Différence */}
                  <div className="bg-yellow-500/20 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Trophées à gagner :</span>
                      <span className="text-yellow-400 font-bold text-xl">
                        +{trophyDifference} <Trophy className="w-5 h-5 inline-block" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Commande */}
              <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 border-yellow-500/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                    Sélectionnez la vitesse d'achèvement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Options de vitesse */}
                  <div className="space-y-3">
                    <div className="bg-gray-700/50 rounded-lg p-4 border border-green-500">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white font-medium">Exprimer</p>
                          <p className="text-gray-400 text-sm">remboursement garanti</p>
                        </div>
                        <p className="text-green-400 font-bold">+0.64 € 🔥</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white font-medium">Super Express</p>
                          <p className="text-gray-400 text-sm">remboursement garanti</p>
                        </div>
                        <p className="text-orange-400 font-bold">+1.28 € 🔥</p>
                      </div>
                    </div>
                  </div>

                  {/* Code promo */}
                  <div>
                    <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-700">
                      Appliquer le code promotionnel
                    </Button>
                  </div>

                  {/* Total */}
                  <div className="bg-gray-800/80 rounded-lg p-6">
                    <div className="flex justify-between items-center text-2xl mb-4">
                      <span className="text-white font-bold">Total</span>
                      <span className="text-green-400 font-bold">{totalPrice} €</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      0.19 € remboursement garanti inclus
                    </p>
                    
                    <div className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Votre email"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                      />
                      
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-lg">
                        Acheter maintenant
                      </Button>
                      
                      <Button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3">
                        G Pay
                      </Button>
                    </div>
                  </div>

                  {/* Payment methods */}
                  <div className="flex justify-center space-x-4 text-gray-400 text-sm">
                    <span>💳 PayPal</span>
                    <span>💳 VISA</span>
                    <span>💳 Mastercard</span>
                    <span>💳 Apple Pay</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BrawlStars

