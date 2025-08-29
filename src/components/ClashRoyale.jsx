import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Trophy, Crown, Zap } from "lucide-react";

export default function ClashRoyale() {
  const [currentTrophies, setCurrentTrophies] = useState([0]);
  const [desiredTrophies, setDesiredTrophies] = useState([1000]);

  const MIN = 0;
  const MAX = 10000;
  const STEP = 10;

  const priceFor1000 = 6.65;
  const pricePerTrophy = priceFor1000 / 1000;

  const cur = Number(currentTrophies[0] || 0);
  const des = Number(desiredTrophies[0] || 0);

  const diff = useMemo(() => Math.max(0, des - cur), [cur, des]);
  const total = useMemo(() => Number((diff * pricePerTrophy).toFixed(2)), [diff, pricePerTrophy]);

  const onChangeCurrent = (v) => {
    const val = Number(v[0] || 0);
    setCurrentTrophies([val]);
    if (val > des) setDesiredTrophies([val]);
  };
  const onChangeDesired = (v) => {
    const val = Number(v[0] || 0);
    setDesiredTrophies([val]);
    if (val < cur) setCurrentTrophies([val]);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Button variant="ghost" className="text-white hover:text-emerald-400" onClick={() => (window.location.href = "/")}>
            <Zap className="w-4 h-4 mr-2" /> Retour à l’accueil
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Clash Royale — Boost de trophées
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">
            <section>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Trophées actuels</span>
                <Badge variant="secondary">{cur.toLocaleString("fr-FR")}</Badge>
              </div>
              <Slider value={currentTrophies} onValueChange={onChangeCurrent} min={MIN} max={MAX} step={STEP} />
            </section>

            <section>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Trophées souhaités</span>
                <Badge variant="secondary">{des.toLocaleString("fr-FR")}</Badge>
              </div>
              <Slider value={desiredTrophies} onValueChange={onChangeDesired} min={MIN} max={MAX} step={STEP} />
            </section>

            {/* Résumé */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-lg border border-gray-200/10">
                <div className="text-xs text-muted-foreground">Différence</div>
                <div className="text-lg font-semibold">{diff.toLocaleString("fr-FR")}</div>
              </div>
              <div className="p-3 rounded-lg border border-gray-200/10">
                <div className="text-xs text-muted-foreground">Prix / 1000</div>
                <div className="text-lg font-semibold">{priceFor1000.toFixed(2)} €</div>
              </div>
              <div className="p-3 rounded-lg border border-gray-200/10">
                <div className="text-xs text-muted-foreground">Total</div>
                <div className="text-xl font-bold">{total.toFixed(2)} €</div>
              </div>
            </section>

            <Button className="w-full">
              <Crown className="w-4 h-4 mr-2" />
              Commander
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
