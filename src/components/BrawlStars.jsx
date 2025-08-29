import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Trophy, Crown } from "lucide-react";

export default function BrawlStars() {
  // on stocke des nombres (le Slider shadcn prend/renvoie un array, on lit v[0])
  const [currentTrophies, setCurrentTrophies] = useState(0);
  const [desiredTrophies, setDesiredTrophies] = useState(1000);

  // bornes/step (ajuste si besoin)
  const MIN = 0;
  const MAX = 30000;
  const STEP = 10;

  // tarif
  const pricePer1000 = 2.65;

  // calculs "live"
  const diff = Math.max(0, desiredTrophies - currentTrophies);
  const totalPrice = ((diff / 1000) * pricePer1000).toFixed(2);

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          Brawl Stars — Boost de trophées
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Trophées actuels */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Trophées actuels</span>
            <Badge variant="secondary">
              {currentTrophies.toLocaleString("fr-FR")}
            </Badge>
          </div>
          <Slider
            min={MIN}
            max={MAX}
            step={STEP}
            value={[currentTrophies]}
            onValueChange={(v) => {
              const val = Number(v[0] || 0);
              // clamp pour garder desired >= current
              setCurrentTrophies(val);
              if (val > desiredTrophies) setDesiredTrophies(val);
            }}
          />
        </section>

        {/* Trophées souhaités */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Trophées souhaités</span>
            <Badge variant="secondary">
              {desiredTrophies.toLocaleString("fr-FR")}
            </Badge>
          </div>
          <Slider
            min={MIN}
            max={MAX}
            step={STEP}
            value={[desiredTrophies]}
            onValueChange={(v) => {
              const val = Number(v[0] || 0);
              setDesiredTrophies(val);
              if (val < currentTrophies) setCurrentTrophies(val);
            }}

