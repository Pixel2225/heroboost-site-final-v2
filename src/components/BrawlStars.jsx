import React, { useMemo, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Trophy } from "lucide-react";

export default function BrawlStars() {
  // Radix slider => états sous forme d'array [value]
  const [currentTrophies, setCurrentTrophies] = useState([0]);
  const [desiredTrophies, setDesiredTrophies] = useState([1000]);
  const [totalPrice, setTotalPrice] = useState("2.69");

  // ====== Paramètres ======
  const MIN = 0;
  const MAX = 30000;       // adapte à ton jeu
  const STEP = 10;

  // Prix: ex. 2,65 € / 1000 trophées
  const priceFor1000 = 2.65;
  const pricePerTrophy = priceFor1000 / 1000;

  // ====== Calculs dérivés, toujours à partir de l'état ======
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
    const newTotal = (diff * pricePerTrophy).toFixed(2);
    // minimum 2.69 € si tu veux garder un plancher
    setTotalPrice(String(Math.max(2.69, Number(newTotal)).toFixed(2)));
  }, [diff, pricePerTrophy]);

  // ====== Garde desired >= current ======
  const onChangeCurrent = (v) => {
    const val = Number(v[0] || 0);
    // clamp: si current > desired, on remonte desired
    setCurrentTrophies([val]);
    if (val > Number(desiredTrophies[0])) setDesiredTrophies([val]);
  };

  const onChangeDesired = (v) => {
    const val = Number(v[0] || 0);
    // clamp: si desired < current, on baisse current
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
      <CardContent className="space-y-6">
        {/* Slider "Actuel" */}
        <div>
          <div className="flex justify-between mb-2 text-sm">
            <span>Trophées actuels</span>
            <Badge variant="secondary">{formattedCurrent}</Badge>
          </div>
          <Slider
            value={currentTrophies}           // ✅ contrôlé
            onValueChange={onChangeCurrent}   // ✅ event Radix
            min={MIN}
            max={MAX}
            step={STEP}
          />
        </div>

        {/* Slider "Souhaité" */}
        <div>
          <div className="flex justify-between mb-2 text-sm">
            <span>Trophées souhaités</span>
            <Badge variant="secondary">{formattedDesired}</Badge>
          </div>
          <Slider
            value={desiredTrophies}           // ✅ contrôlé
            onValueChange={onChangeDesired}   // ✅ event Radix
            min={MIN}
            max={MAX}
            step={STEP}
          />
        </div>

        {/* Résumé dynamique */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xs text-muted-foreground">Différence</div>
            <div className="text-lg font-semibold">
              {diff.toLocaleString("fr-FR")}
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Prix / 1k</div>
            <div className="text-lg font-semibold">
              {priceFor1000.toFixed(2)} €
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Total</div>
            <div className="text-xl font-bold">{totalPrice} €</div>
          </div>
        </div>

        <Button className="w-full">Commander</Button>
      </CardContent>
    </Card>
  );
}
