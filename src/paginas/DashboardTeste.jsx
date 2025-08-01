import { useState } from 'react';

const DashboardTeste = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Dados de exemplo
  const stats = [
    { title: 'Total de Usuários', value: '1,234', change: '+12%', trend: 'up' },
    { title: 'Receita Mensal', value: 'R$ 9,876', change: '+5.4%', trend: 'up' },
    { title: 'Tarefas Pendentes', value: '56', change: '-3.2%', trend: 'down' },
    { title: 'Satisfação', value: '89%', change: '+1.8%', trend: 'up' }
  ];

  const recentActivities = [
    { id: 1, user: 'Ana Silva', action: 'Completou tarefa', time: '2 min atrás' },
    { id: 2, user: 'Carlos Souza', action: 'Adicionou arquivo', time: '1 hora atrás' },
    { id: 3, user: 'Maria Oliveira', action: 'Criou projeto', time: '3 horas atrás' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Cabeçalho */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard de Teste</h1>
        <p className="text-gray-600">Visão geral do sistema</p>
      </header>

      {/* Abas */}
      <div className="flex border-b border-gray-200 mb-6">
        {['overview', 'analytics', 'reports'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
            <div className={`flex items-center mt-2 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {stat.trend === 'up' ? (
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
              <span className="text-sm">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico e Atividades */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Gráfico Simulado */}
        <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Desempenho Mensal</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Gráfico seria renderizado aqui</p>
          </div>
        </div>

        {/* Atividades Recentes */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Atividades Recentes</h2>
          <ul className="space-y-4">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    {activity.user.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{activity.user}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tabela Simples */}
      <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Últimos Pedidos</h2>
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">ID</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Cliente</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Valor</th>
              <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                <td className="py-3 px-4">#{1000 + item}</td>
                <td className="py-3 px-4">Cliente {item}</td>
                <td className="py-3 px-4">R$ {item * 250},00</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item % 3 === 0 ? 'bg-green-100 text-green-800' : 
                    item % 2 === 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {item % 3 === 0 ? 'Entregue' : item % 2 === 0 ? 'Pendente' : 'Processando'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTeste;