import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Shield, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Settings, 
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Trophy,
  MessageCircle,
  Eye,
  Edit,
  Trash2,
  Download,
  Plus,
  Search,
  Filter,
  BarChart3,
  PieChart,
  Calendar,
  Mail,
  Phone
} from 'lucide-react'

function AdminDashboard() {
  const [orders] = useState([
    {
      id: 'HB-001',
      clientId: 'client_001',
      clientName: 'GamerPro2024',
      clientEmail: 'client@example.com',
      game: 'Call of Duty: Modern Warfare',
      service: 'Trophées PSN',
      quantity: 25,
      price: 0.75,
      status: 'En cours',
      progress: 60,
      assignedTo: 'Admin_Alex',
      createdAt: '2024-08-27 10:30',
      estimatedTime: '2h 30min'
    },
    {
      id: 'HB-002',
      clientId: 'client_002',
      clientName: 'ProGamer123',
      clientEmail: 'pro@example.com',
      game: 'FIFA 24',
      service: 'Boost de Rang',
      quantity: 1,
      price: 15.00,
      status: 'En attente',
      progress: 0,
      assignedTo: 'Non assigné',
      createdAt: '2024-08-27 11:15',
      estimatedTime: '4h 00min'
    },
    {
      id: 'HB-003',
      clientId: 'client_003',
      clientName: 'ElitePlayer',
      clientEmail: 'elite@example.com',
      game: 'Destiny 2',
      service: 'Coaching',
      quantity: 1,
      price: 25.00,
      status: 'Terminé',
      progress: 100,
      assignedTo: 'Admin_Sarah',
      createdAt: '2024-08-26 14:20',
      completedAt: '2024-08-27 09:45'
    }
  ])

  const [clients] = useState([
    {
      id: 'client_001',
      name: 'GamerPro2024',
      email: 'client@example.com',
      totalOrders: 8,
      totalSpent: 45.50,
      memberSince: '2024-01-15',
      status: 'Actif',
      lastOrder: '2024-08-27'
    },
    {
      id: 'client_002',
      name: 'ProGamer123',
      email: 'pro@example.com',
      totalOrders: 12,
      totalSpent: 89.25,
      memberSince: '2023-11-20',
      status: 'Premium',
      lastOrder: '2024-08-27'
    },
    {
      id: 'client_003',
      name: 'ElitePlayer',
      email: 'elite@example.com',
      totalOrders: 25,
      totalSpent: 234.75,
      memberSince: '2023-08-10',
      status: 'VIP',
      lastOrder: '2024-08-26'
    }
  ])

  const [stats] = useState({
    totalRevenue: 1250.75,
    totalOrders: 156,
    activeOrders: 23,
    totalClients: 89,
    completionRate: 98.5,
    averageOrderValue: 8.02,
    monthlyGrowth: 15.3,
    supportTickets: 5
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'En cours': return 'bg-blue-500'
      case 'En attente': return 'bg-yellow-500'
      case 'Terminé': return 'bg-green-500'
      case 'Annulé': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getClientStatusColor = (status) => {
    switch (status) {
      case 'Actif': return 'bg-green-500'
      case 'Premium': return 'bg-blue-500'
      case 'VIP': return 'bg-purple-500'
      case 'Inactif': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header d'administration */}
      <div className="bg-red-900 border-b border-red-700 p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8 text-red-400" />
              <div>
                <h1 className="text-3xl font-bold text-white">Administration Heroboost</h1>
                <p className="text-red-200 mt-1">Tableau de bord des gérants</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-500 text-white">
                <Shield className="w-4 h-4 mr-1" />
                Admin
              </Badge>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-red-900">
                <Settings className="w-4 h-4 mr-2" />
                Paramètres
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        {/* Statistiques principales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Revenus totaux</p>
                  <p className="text-2xl font-bold text-green-400">{stats.totalRevenue}€</p>
                  <p className="text-green-400 text-sm">+{stats.monthlyGrowth}% ce mois</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Commandes totales</p>
                  <p className="text-2xl font-bold text-blue-400">{stats.totalOrders}</p>
                  <p className="text-blue-400 text-sm">{stats.activeOrders} en cours</p>
                </div>
                <ShoppingCart className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Clients totaux</p>
                  <p className="text-2xl font-bold text-purple-400">{stats.totalClients}</p>
                  <p className="text-purple-400 text-sm">Panier moyen: {stats.averageOrderValue}€</p>
                </div>
                <Users className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Taux de réussite</p>
                  <p className="text-2xl font-bold text-yellow-400">{stats.completionRate}%</p>
                  <p className="text-yellow-400 text-sm">{stats.supportTickets} tickets support</p>
                </div>
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets principaux */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="orders" className="data-[state=active]:bg-red-500">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Gestion des Commandes
            </TabsTrigger>
            <TabsTrigger value="clients" className="data-[state=active]:bg-red-500">
              <Users className="w-4 h-4 mr-2" />
              Gestion des Clients
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-red-500">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analyses
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-red-500">
              <Settings className="w-4 h-4 mr-2" />
              Configuration
            </TabsTrigger>
          </TabsList>

          {/* Onglet Gestion des Commandes */}
          <TabsContent value="orders" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2 text-red-400" />
                    Gestion des Commandes
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-red-500 hover:bg-red-600">
                      <Plus className="w-4 h-4 mr-1" />
                      Nouvelle commande
                    </Button>
                    <Button size="sm" variant="outline" className="text-white border-gray-600">
                      <Download className="w-4 h-4 mr-1" />
                      Exporter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                          <span className="text-gray-300 font-mono text-sm">#{order.id}</span>
                          <span className="text-gray-400 text-sm">{order.createdAt}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400 font-bold">{order.price}€</span>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="outline" className="text-white border-gray-600 p-1">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-white border-gray-600 p-1">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-400 border-red-600 p-1">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Client</p>
                          <p className="text-white font-medium">{order.clientName}</p>
                          <p className="text-gray-500 text-xs">{order.clientEmail}</p>
                        </div>
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
                          <p className="text-gray-400 text-sm">Assigné à</p>
                          <p className="text-white font-medium">{order.assignedTo}</p>
                        </div>
                      </div>

                      {order.status === 'En cours' && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-400">Progression</span>
                            <span className="text-white">{order.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div 
                              className="bg-red-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${order.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-gray-400 text-sm mt-2">
                            Temps estimé restant: {order.estimatedTime}
                          </p>
                        </div>
                      )}

                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-red-500 hover:bg-red-600">
                          Assigner
                        </Button>
                        <Button size="sm" variant="outline" className="text-white border-gray-600">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Contacter client
                        </Button>
                        {order.status === 'En cours' && (
                          <Button size="sm" className="bg-green-500 hover:bg-green-600">
                            Marquer terminé
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Gestion des Clients */}
          <TabsContent value="clients" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center">
                    <Users className="w-5 h-5 mr-2 text-red-400" />
                    Gestion des Clients
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="text-white border-gray-600">
                      <Search className="w-4 h-4 mr-1" />
                      Rechercher
                    </Button>
                    <Button size="sm" variant="outline" className="text-white border-gray-600">
                      <Filter className="w-4 h-4 mr-1" />
                      Filtrer
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clients.map((client) => (
                    <div key={client.id} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge className={getClientStatusColor(client.status)}>
                            {client.status}
                          </Badge>
                          <span className="text-white font-bold">{client.name}</span>
                          <span className="text-gray-400 text-sm">{client.email}</span>
                        </div>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline" className="text-white border-gray-600 p-1">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-white border-gray-600 p-1">
                            <Mail className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-white border-gray-600 p-1">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-gray-400 text-sm">Commandes totales</p>
                          <p className="text-white font-bold">{client.totalOrders}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Total dépensé</p>
                          <p className="text-green-400 font-bold">{client.totalSpent}€</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Membre depuis</p>
                          <p className="text-white font-medium">{client.memberSince}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Dernière commande</p>
                          <p className="text-white font-medium">{client.lastOrder}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Analyses */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-red-400" />
                    Revenus mensuels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                      <p>Graphique des revenus mensuels</p>
                      <p className="text-sm">(Intégration avec bibliothèque de graphiques)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <PieChart className="w-5 h-5 mr-2 text-red-400" />
                    Répartition des services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Trophées PSN</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-600 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-white text-sm">65%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Boost de Rang</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-600 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                        <span className="text-white text-sm">25%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Coaching</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-600 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                        </div>
                        <span className="text-white text-sm">10%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Configuration */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-red-400" />
                    Paramètres généraux
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Prix par trophée (€)</label>
                    <div className="flex items-center space-x-2 mt-1">
                      <input 
                        type="number" 
                        defaultValue="0.03" 
                        step="0.01"
                        className="bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 w-24"
                      />
                      <Button size="sm" className="bg-red-500 hover:bg-red-600">
                        Mettre à jour
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Code promo actuel</label>
                    <div className="flex items-center space-x-2 mt-1">
                      <input 
                        type="text" 
                        defaultValue="HERO10" 
                        className="bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 flex-1"
                      />
                      <Button size="sm" className="bg-red-500 hover:bg-red-600">
                        Modifier
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Réduction (%)</label>
                    <div className="flex items-center space-x-2 mt-1">
                      <input 
                        type="number" 
                        defaultValue="10" 
                        className="bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 w-24"
                      />
                      <Button size="sm" className="bg-red-500 hover:bg-red-600">
                        Appliquer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="w-5 h-5 mr-2 text-red-400" />
                    Gestion des administrateurs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-gray-700 p-3 rounded">
                      <div>
                        <p className="text-white font-medium">Admin_Alex</p>
                        <p className="text-gray-400 text-sm">alex@heroboost.gg</p>
                      </div>
                      <Badge className="bg-green-500">Actif</Badge>
                    </div>
                    <div className="flex items-center justify-between bg-gray-700 p-3 rounded">
                      <div>
                        <p className="text-white font-medium">Admin_Sarah</p>
                        <p className="text-gray-400 text-sm">sarah@heroboost.gg</p>
                      </div>
                      <Badge className="bg-green-500">Actif</Badge>
                    </div>
                  </div>
                  <Button className="bg-red-500 hover:bg-red-600 w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter un administrateur
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default AdminDashboard

