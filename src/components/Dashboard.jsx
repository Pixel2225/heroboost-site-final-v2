import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import {
  Trophy,
  ShoppingCart,
  User,
  Settings,
  History,
  MessageCircle,
  CreditCard,
  CheckCircle,
  Clock,
  AlertCircle,
  Star,
  Download,
  LogOut
} from 'lucide-react'

function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("heroboost_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    } else {
      // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
      window.location.href = "/login"
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("heroboost_user")
    window.location.href = "/login"
  }

  if (!user) {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Chargement du tableau de bord...</div>
  }

  const [activeOrders] = useState([
    {
      id: "HB-001",
      game: "Call of Duty: Modern Warfare",
      service: "Trophées PSN",
      quantity: 25,
      price: 0.75,
      status: "En cours",
      progress: 60,
      estimatedTime: "2h 30min",
    },
    {
      id: "HB-002",
      game: "FIFA 24",
      service: "Boost de Rang",
      quantity: 1,
      price: 15.00,
      status: "En attente",
      progress: 0,
      estimatedTime: "4h 00min",
    },
  ])

  const [completedOrders] = useState([
    {
      id: "HB-003",
      game: "Assassin's Creed Valhalla",
      service: "Trophées PSN",
      quantity: 50,
      price: 1.50,
      status: "Terminé",
      completedDate: "2024-08-25",
      rating: 5,
    },
    {
      id: "HB-004",
      game: "Destiny 2",
      service: "Coaching",
      quantity: 1,
      price: 25.00,
      status: "Terminé",
      completedDate: "2024-08-20",
      rating: 5,
    },
  ])

  const [userStats] = useState({
    totalOrders: 15,
    totalTrophies: 450,
    totalSpent: 125.50,
    memberSince: "2024-01-15",
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "En cours":
        return "bg-blue-500"
      case "En attente":
        return "bg-yellow-500"
      case "Terminé":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "En cours":
        return <Clock className="w-4 h-4" />
      case "En attente":
        return <AlertCircle className="w-4 h-4" />
      case "Terminé":
        return <CheckCircle className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header du tableau de bord */}
      <div className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-green-400">Tableau de Bord</h1>
              <p className="text-gray-300 mt-1">Bienvenue, {user.name || user.email} ! Gérez vos commandes et suivez vos progrès</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-500 text-white">
                <Trophy className="w-4 h-4 mr-1" />
                Membre Premium
              </Badge>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                <User className="w-4 h-4 mr-2" />
                Mon Profil
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Commandes totales</p>
                  <p className="text-2xl font-bold text-white">{userStats.totalOrders}</p>
                </div>
                <ShoppingCart className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Trophées obtenus</p>
                  <p className="text-2xl font-bold text-white">{userStats.totalTrophies}</p>
                </div>
                <Trophy className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total dépensé</p>
                  <p className="text-2xl font-bold text-white">{userStats.totalSpent}€</p>
                </div>
                <CreditCard className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Membre depuis</p>
                  <p className="text-2xl font-bold text-white">8 mois</p>
                </div>
                <Star className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="orders" className="data-[state=active]:bg-green-500">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Mes Commandes
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-green-500">
              <History className="w-4 h-4 mr-2" />
              Historique
            </TabsTrigger>
            <TabsTrigger value="support" className="data-[state=active]:bg-green-500">
              <MessageCircle className="w-4 h-4 mr-2" />
              Support
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-green-500">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </TabsTrigger>
          </TabsList>

          {/* Onglet Commandes actives */}
          <TabsContent value="orders" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2 text-green-400" />
                  Commandes en cours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeOrders.map((order) => (
                    <div key={order.id} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusIcon(order.status)}
                            <span className="ml-1">{order.status}</span>
                          </Badge>
                          <span className="text-gray-300 font-mono text-sm">#{order.id}</span>
                        </div>
                        <span className="text-green-400 font-bold">{order.price}€</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Jeu</p>
                          <p className="text-white font-medium">{order.game}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Service</p>
                          <p className="text-white font-medium">{order.service}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Quantité</p>
                          <p className="text-white font-medium">{order.quantity}</p>
                        </div>
                      </div>

                      {order.status === "En cours" && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-400">Progression</span>
                            <span className="text-white">{order.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${order.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-gray-400 text-sm mt-2">
                            Temps estimé restant: {order.estimatedTime}
                          </p>
                        </div>
                      )}

                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-green-500 hover:bg-green-600">
                          Voir détails
                        </Button>
                        <Button size="sm" variant="outline" className="text-white border-gray-600">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Contacter
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Historique */}
          <TabsContent value="history" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <History className="w-5 h-5 mr-2 text-green-400" />
                  Commandes terminées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedOrders.map((order) => (
                    <div key={order.id} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-green-500">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Terminé
                          </Badge>
                          <span className="text-gray-300 font-mono text-sm">#{order.id}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < order.rating ? "text-yellow-400 fill-current" : "text-gray-600"}`} 
                              />
                            ))}
                          </div>
                          <span className="text-green-400 font-bold">{order.price}€</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Jeu</p>
                          <p className="text-white font-medium">{order.game}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Service</p>
                          <p className="text-white font-medium">{order.service}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Quantité</p>
                          <p className="text-white font-medium">{order.quantity}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Terminé le</p>
                          <p className="text-white font-medium">{order.completedDate}</p>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-white border-gray-600">
                          <Download className="w-4 h-4 mr-1" />
                          Télécharger facture
                        </Button>
                        <Button size="sm" variant="outline" className="text-white border-gray-600">
                          Recommander
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Support */}
          <TabsContent value="support" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-green-400" />
                  Centre d'aide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-gray-700 border-gray-600">
                    <CardContent className="p-6 text-center">
                      <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h3 className="text-white font-bold mb-2">Chat en direct</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Discutez avec notre équipe support 24/7
                      </p>
                      <Button className="bg-blue-500 hover:bg-blue-600 w-full">
                        Démarrer le chat
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-700 border-gray-600">
                    <CardContent className="p-6 text-center">
                      <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-white font-bold mb-2">Discord</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Rejoignez notre serveur Discord
                      </p>
                      <Button className="bg-purple-500 hover:bg-purple-600 w-full">
                        Rejoindre Discord
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-white font-bold mb-4">Questions fréquentes</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-600 pb-4">
                      <h4 className="text-white font-medium mb-2">Combien de temps prend une commande de trophées ?</h4>
                      <p className="text-gray-300 text-sm">
                        Le temps varie selon le jeu et le nombre de trophées. En moyenne, comptez 2-6 heures pour 50 trophées.
                      </p>
                    </div>
                    <div className="border-b border-gray-600 pb-4">
                      <h4 className="text-white font-medium mb-2">Mes données de compte sont-elles sécurisées ?</h4>
                      <p className="text-gray-300 text-sm">
                        Oui, nous utilisons des connexions sécurisées et ne stockons jamais vos mots de passe.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Puis-je annuler une commande ?</h4>
                      <p className="text-gray-300 text-sm">
                        Les annulations sont possibles avant le début du boost. Contactez le support pour plus d'informations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Paramètres */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-green-400" />
                  Paramètres du compte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="username" className="text-white">Nom d'utilisateur</Label>
                    <Input id="username" type="text" defaultValue={user.name} className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input id="email" type="email" defaultValue={user.email} className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600">Mettre à jour le profil</Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-bold">Changer le mot de passe</h3>
                  <div>
                    <Label htmlFor="current-password" className="text-white">Mot de passe actuel</Label>
                    <Input id="current-password" type="password" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="new-password" className="text-white">Nouveau mot de passe</Label>
                    <Input id="new-password" type="password" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-new-password" className="text-white">Confirmer le nouveau mot de passe</Label>
                    <Input id="confirm-new-password" type="password" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600">Changer le mot de passe</Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-bold">Préférences de notification</h3>
                  <div className="flex items-center">
                    <input type="checkbox" id="email-notifications" className="mr-2" defaultChecked />
                    <Label htmlFor="email-notifications" className="text-white">Notifications par email</Label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="sms-notifications" className="mr-2" />
                    <Label htmlFor="sms-notifications" className="text-white">Notifications par SMS</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Dashboard

