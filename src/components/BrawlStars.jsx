import React, { useState, useMemo } from 'react';

const BrawlStars = () => {
  const [currentTrophies, setCurrentTrophies] = useState(0);
  const [desiredTrophies, setDesiredTrophies] = useState(5000);

  // Le prix de base pour 1000 trophées
  const BASE_PRICE_PER_1000 = 2.65;

  // Calcule la différence de trophées à chaque mise à jour
  const difference = useMemo(() => {
    const diff = desiredTrophies - currentTrophies;
    return diff > 0 ? diff : 0;
  }, [currentTrophies, desiredTrophies]);

  // Calcule le prix total à chaque mise à jour
  const totalPrice = useMemo(() => {
    if (difference <= 0) {
      return 0;
    }
    const price = (difference / 1000) * BASE_PRICE_PER_1000;
    return price.toFixed(2); // Arrondi à 2 décimales pour l'affichage
  }, [difference, BASE_PRICE_PER_1000]);

  const handleCurrentTrophiesChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setCurrentTrophies(value);
    // S'assure que les trophées désirés ne sont jamais inférieurs aux trophées actuels
    if (value > desiredTrophies) {
      setDesiredTrophies(value);
    }
  };

  const handleDesiredTrophiesChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setDesiredTrophies(value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-4xl p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Brawl Stars — Boost de trophées</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section de configuration du boost */}
          <div className="p-6 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Configuration du boost</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="currentTrophies" className="block mb-2 text-sm font-medium">Trophées actuels: {currentTrophies}</label>
                <input
                  id="currentTrophies"
                  type="range"
                  min="0"
                  max="50000"
                  value={currentTrophies}
                  onChange={handleCurrentTrophiesChange}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <label htmlFor="desiredTrophies" className="block mb-2 text-sm font-medium">Trophées souhaités: {desiredTrophies}</label>
                <input
                  id="desiredTrophies"
                  type="range"
                  min={currentTrophies} // Le minimum est la valeur actuelle
                  max="50000"
                  value={desiredTrophies}
                  onChange={handleDesiredTrophiesChange}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="p-4 bg-gray-600 rounded-lg">
                <span className="text-lg font-semibold">Trophées à gagner :</span>
                <span className="text-lg font-bold ml-2">+ {difference.toLocaleString()} 🏆</span>
              </div>
            </div>
          </div>

          {/* Section du résumé de la commande */}
          <div className="p-6 bg-gray-700 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sélectionnez la vitesse d'achèvement</h3>
              <div className="space-y-4">
                <div className="p-3 bg-gray-600 rounded-lg flex justify-between items-center cursor-pointer border-2 border-green-500">
                  <span>Exprimer</span>
                  <span className="text-green-400">+0,64 € 🔥</span>
                </div>
                <div className="p-3 bg-gray-600 rounded-lg flex justify-between items-center cursor-pointer">
                  <span>Super Express</span>
                  <span className="text-orange-400">+1,28 € 🔥</span>
                </div>
                {/* Vous pouvez ajouter d'autres options ici */}
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-2xl font-bold text-green-400">
                  <span>Total:</span>
                  <span>{totalPrice} €</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">0,19 € remboursement garanti inclus</p>
              </div>
            </div>
            <div className="mt-6">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-3 mb-4 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="w-full py-3 text-lg font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
                Achetez maintenant
              </button>
              <button className="w-full py-3 mt-2 text-lg font-bold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                G Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrawlStars;
