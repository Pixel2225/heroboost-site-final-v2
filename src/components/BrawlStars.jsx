// src/components/BrawlStars.jsx
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Trophy, Crown } from "lucide-react";

export default function BrawlStars() {
  // Valeurs numériques (on passe/recup via array pour Slider Radix)
  const [currentTrophies, setCurrentTrophies] = useState(0);
  const [desiredTrophies, setDesiredTrophies] = useState(1000);

  const MIN = 0;
  const MAX = 30000;
  const STEP = 10;

  const pricePer1000 = 2.65;

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
        {/* Actuels */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Trophées actuels</span>
            <Badge variant="secondary">{currentTrophies.toLocaleString("fr-FR")}</Badge>
          </div>
          <Slider
            min={MIN}
            max={MAX}
            step={STEP}
            value={[currentTrophies]}
            onValueChange={(v) => {
              const val = Number(v?.[0] ?? 0);
              setCurrentTrophies(val);
              if (val > desiredTrophies) setDesiredTrophies(val);
            }}
          />
        </section>

        {/* Souhaités */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Trophées souhaités</span>
            <Badge variant="secondary">{desiredTrophies.toLocaleString("fr-FR")}</Badge>
          </div>
          <Slider
            min={MIN}
            max={MAX}
            step={STEP}
            value={[desiredTrophies]}
            onValueChange={(v) => {
              const val = Number(v?.[0] ?? 0);
              setDesiredTrophies(val);
              if (val < currentTrophies) setCurrentTrophies(val);
            }}
          />
        </section>

        {/* Résumé */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-3 rounded-lg border border-gray-200/10">
            <div className="text-xs text-muted-foreground">Différence</div>
            <div className="text-lg font-semibold">{diff.toLocaleString("fr-FR")}</div>
          </div>
          <div className="p-3 rounded-lg border border-gray-200/10">
            <div className="text-xs text-muted-foreground">Prix / 1000</div>
            <div className="text-lg font-semibold">{pricePer1000.toFixed(2)} €</div>
          </div>
          <div className="p-3 rounded-lg border border-gray-200/10">
            <div className="text-xs text-muted-foreground">Total</div>
            <div className="text
