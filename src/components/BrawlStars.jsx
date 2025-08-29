// src/components/BrawlStars.jsx
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Trophy, Crown } from "lucide-react";

export default function BrawlStars() {
  const [currentTrophies, setCurrentTrophies] = useState(0);
  const [desiredTrophies, setDesiredTrophies] = useState(1000);

  const MIN = 0;
  const MAX = 30000;
  const STEP = 10;

  const pricePer1000 = 2.65;

  // 🔥 Différence et total calculés dynamiquement
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
      <CardContent className="space-y-6">
        {/* Slider Trophées actuels */}
        <section>
          <label className="text-sm font-medium">Trophées actuels</label>
          <Slider
            min={MIN}
            max={MAX}
            step={STEP}
            value={[currentTrophies]}
            onValueChange={(v) => setCurrentTrophies(v[0])}
          />
          <div className="text-right text-sm font-semibold">{currentTrophies}</div>
        </section>

        {/* Slider Trophées souhaités */}
        <section>
          <label className="text-sm font-medium">Trophées souhaités</label>
          <Slider
            min={MIN}
            max={MAX}
            step={STEP}
            value={[desiredTrophies]}
            onValueChange={(v) => setDesiredTrophies(v[0])}
          />
          <div className="text-right text-sm font-semibold">{desiredTrophies}</div>
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
            {/* ⚡ Ici on affiche bien le total CALCULÉ */}
            <div className="text-xl font-bold">{totalPrice} €</div>
          </div>
        </section>

        <Button className="w-full">
          <Crown className="mr-2 h-4 w-4" /> Commander
        </Button>
      </CardContent>
    </Card>
  );
}
