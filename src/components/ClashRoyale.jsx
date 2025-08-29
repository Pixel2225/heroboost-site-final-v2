import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Trophy, Crown, Zap } from 'lucide-react'

function ClashRoyale() {
  const [currentTrophies, setCurrentTrophies] = useState(0)
  const [desiredTrophies, setDesiredTrophies] = useState(1000)

  // Prix par 1000 trophées
  const pricePer1000 = 6.65

  // Calcul dynamique
  const trophyDifference = Math.max(0, desiredTrophies - currentTrophies)
  const totalPrice = ((trophyDifference / 1000) * pricePer1000).toFixed(2)

  return (
    <Card className="max-w-xl mx-auto mt-10 p-6">
      <CardHeader>
        <CardTitle>
          <Trophy className="inline-block mr-2" /> Clash Royale — Boost de trophées
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Trophées actuels */}
          <div>
            <label>Trophées actuels</label>
            <Slider
              min={0}
              max={10000}
              step={10}
              value={[currentTrophies]}
              onValueChange={(val) => setCurrentTrophies(val[0])}
            />
            <span>{currentTrophies}</span>
          </div>

          {/* Trophées souhaités */}
          <div>
            <label>Trophées souhaités</label>
            <Slider
              min={0}
              max={10000}
              step={10}
              value={[desiredTrophies]}
              onValueChange={(val) => setDesiredTrophies(val[0])}
            />
            <span>{desiredTrophies}</span>
          </div>

          {/* Résumé */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-bold">{trophyDifference}</p>
              <p>Différence</p>
            </div>
            <div>
              <p className="font-bold">{pricePer1000} €</p>
              <p>Prix / 1000</p>
            </div>
            <div>
              <p className="font-bold">{totalPrice} €</p>
              <p>Total</p>
            </div>
          </div>

          <Button className="w-full">
            <Crown className="mr-2" /> Commander
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ClashRoyale
