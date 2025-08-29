import React, { useMemo, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Trophy, Crown } from "lucide-react";

export default function BrawlStars() {
  const [currentTrophies, setCurrentTrophies] = useState([0]);
  const [desiredTrophies, setDesiredTrophies] = useState([1000]);
  const [totalPrice, setTotalPrice] = useState("0.00");

  // Paramètres Brawl Stars
  const MIN = 0;
  const MAX = 30000;  // ajuste si besoin
  const STEP = 10;

  // Tarif
  const priceFor1000 = 2.65;
  const pricePerTrophy = priceFor1000 / 1000;

  // Dérivés
  const diff = useMemo(() => {
    const cur = Number(currentTrophies[0] || 0);
    const des = Number(desiredTrophies[0] || 0);
    return Math.max(0, des - cur);
  }, [currentTrophies, desiredTrophies]);

  const formattedCurrent = useMemo(
    () => Number(currentTrophies[0] || 0).toLocaleString("fr-FR"),
    [currentTrophies]
  );
  const formattedDesired = useMemo(
    () => Number(desiredTrophies[0] || 0).toLocaleString("fr-FR"),
    [desiredTrophies]
  );

  useEffect(() => {
    const raw = diff * pricePerTrophy;
    setTotalPrice(raw.toFixed(2));     // ❌ pas de plancher
  }, [diff, pricePerTrophy]);

  const onChangeCurrent = (v) => {
    const val = Number(v[0] || 0);
    setCurrentTrophies([val]);
    if (val > Number(desiredTrophies[0])) setDesiredTrophies([val]);
  };
  const onChangeDesired = (v) => {
    const val = Number(v[0] || 0);
    setDesiredTrophies([val]);
    if (val < Number(currentTrophies[0])) setCurrentTrophies([val]);
  };

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
            <Badge variant="secondary">{formattedCurrent}</Badge>
          </div>
          <Slider
            value={currentTrophies}
            onValueChange={onChangeCurrent}
            min={MIN}
            max={MAX}
            step={STEP}
          />
        </section>

        {/* Souhaités */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Trophées souhaités</span>
            <Badge variant="secondary">{formattedDesired}</Badge>
          </div>
          <Slider
            value={desiredTrophies}
            onValueChange={onChangeDesired}
            min={MIN}
            max={MAX}
            step={STEP}
          />
        </section>

        {/* Résumé */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-3 rounded-lg border border-gray-200/10">
            <div className="text-xs text-muted-foreground">Différence</div>
            <div className="text-lg font-semibold">
              {diff.toLocaleString("fr-FR")}
            </div>
          </div>
          <div className="p-3 rounded-lg border border-gray-200/10">
            <div className="text-xs text-muted-foreground">Prix / 1000</div>
            <div className="text-lg font-semibold">{priceFor1000.toFixed(2)} €</div>
          </div>
          <div className="p-3 rounded-lg border border-gray-200/10">
            <div className="text-xs text-muted-foreground">Total</div>
            <div className="text-xl font-bold">{totalPrice} €</div>
          </div>
        </section>

        <Button className="w-full">
          <Crown className="w-4 h-4 mr-2" />
          Commander
        </Button>
      </CardContent>
    </Card>
  );
}
