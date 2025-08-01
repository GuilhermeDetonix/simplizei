import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
import ChangePassword from './ModalChangePass';

const UserProfilePage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    atividade: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    nome_empresa: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  // Função para carregar informações do usuário
  const carregarInformacoes = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${import.meta.env.VITE_URL_API_DB}carregar-informacoes/${id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_URL_API_KEY}`
        }
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();

      if (parseInt(data.status) !== 1) {
        throw new Error(data.message || 'Erro ao carregar informações');
      }

      // Verifica se data.data existe e é um objeto
      if (!data.data || typeof data.data !== 'object') {
        throw new Error('Formato de dados inválido da API');
      }

      // Atualiza o estado com os dados formatados
      setUserData({
        nome: data.data.nome || '',
        email: data.data.email || '',
        telefone: data.data.telefone || '',
        cpf: data.data.cpf || '',
        empresa: data.data.empresa || '',
        atividade: data.data.atividade || '',
        cep: data.data.cep || '',
        logradouro: data.data.endereco || '',
        numero: data.data.numero || '',
        complemento: data.data.complemento || '',
        nome_empresa: data.data.nome_empresa || '',
        bairro: data.data.bairro || '',
        cidade: data.data.cidade || '',
        estado: data.data.uf || '',
      });

    } catch (error) {
      console.error('Erro ao carregar informações:', error);
      toast.error(error.message || 'Erro ao carregar dados do usuário');
    } finally {
      setIsLoading(false);
    }
  };


  const applyCpfMask = (value) => {
    // Remove tudo que não é dígito
    let numbers = value.replace(/\D/g, '');

    // Limita a 11 caracteres
    numbers = numbers.substring(0, 11);

    // Aplica a máscara: 999.999.999-99
    return numbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  // Função auxiliar para máscara de CEP
  const applyCepMask = (value) => {
    // Remove tudo que não é dígito
    let numbers = value.replace(/\D/g, '');

    // Limita a 8 caracteres
    numbers = numbers.substring(0, 8);

    // Aplica a máscara: 99.999-999
    return numbers.replace(/(\d{2})(\d{1,3})(\d{1,3})$/, '$1.$2-$3');
  };


  // Carrega os dados quando o componente monta ou quando o userId muda
  useEffect(() => {
    if (userId) {
      carregarInformacoes(userId);
    } else {
      toast.error('ID do usuário não encontrado');
      setIsLoading(false);
    }
  }, [userId]);

  const handleChange = (e) => {
    var { name, value } = e.target;
    if (name === 'cpf') {
      value = applyCpfMask(value);
    } else if (name === 'cep') {
      value = applyCepMask(value);
    }
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleDashboard = () => {
    navigate(`/painel-do-usuario/${userId}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 120000);

      const response = await fetch(`${import.meta.env.VITE_URL_API_DB}salvar-alteracoes-cadastro/${userId}`, {
        signal: controller.signal,
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_URL_API_KEY}`
        },
        body: JSON.stringify(userData)
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();

      if (parseInt(data.status) !== 1) {
        throw new Error(data.message || 'Erro ao atualizar dados');
      }

      toast.success(data.message || 'Dados atualizados com sucesso!');
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao atualizar:', error);
      if (error.name === 'AbortError') {
        toast.error('Requisição cancelada: tempo limite excedido');
      } else {
        toast.error(error.message || 'Erro ao atualizar perfil');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div>
        {/* Seu conteúdo */}
        <Toaster position="top-right" />
      </div>
      <ChangePassword
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
      <header className="sticky top-0 z-50 bg-indigo-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-white text-xl font-bold tracking-tight">Perfil do Usuário</div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="md:hidden text-white p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center focus:outline-none"
                >
                  <img
                    src="/assets/icons/3237472.png"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <svg
                    className={`ml-2 w-4 h-4 text-white transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="py-1">
                      <a
                        href="javascript:;"
                        onClick={handleDashboard}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Dashboard
                      </a>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sair
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Cabeçalho do Card */}
          <div className="px-6 py-5 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src="/assets/icons/3237472.png"
                    alt="User"
                    className="w-16 h-16 rounded-full border-4 border-indigo-300"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{userData.nome}</h1>
                  <p className="text-indigo-100">{userData.nome_empresa}</p>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-white text-indigo-700 rounded-lg hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Editar Perfil
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      form="profile-form"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Salvar Alterações
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Formulário de Perfil */}
          <form
            id="profile-form"
            onSubmit={handleSubmit}
            className="p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Coluna Esquerda */}
              <div>
                {/* Informações Pessoais */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Informações Pessoais
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nome Completo
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="nome"
                          value={userData.nome}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Seu nome completo"
                        />
                      ) : (
                        <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                          {userData.nome}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CPF
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="cpf"
                          value={userData.cpf}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="000.000.000-00"
                        />
                      ) : (
                        <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                          {userData.cpf}
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="email"
                          value={userData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Email"
                        />
                      ) : (
                        <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                          {userData.email}
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="telefone"
                          value={userData.telefone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Telefone"
                        />
                      ) : (
                        <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                          {userData.telefone}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Informações da Empresa */}
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Informações da Empresa
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nome da Empresa
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="empresa"
                          value={userData.nome_empresa}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Nome da sua empresa"
                        />
                      ) : (
                        <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                          {userData.nome_empresa}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de Negócio
                      </label>
                      {isEditing ? (
                        <select
                          name="tipo_negocio"
                          value={userData.atividade}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="Tecnologia">Tecnologia</option>
                          <option value="Comércio">Comércio</option>
                          <option value="Serviços">Serviços</option>
                          <option value="Indústria">Indústria</option>
                          <option value="Educação">Educação</option>
                          <option value="Saúde">Saúde</option>
                        </select>
                      ) : (
                        <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                          {userData.atividade}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna Direita - Endereço */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Endereço
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CEP
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="cep"
                        value={userData.cep}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="00000-000"
                      />
                    ) : (
                      <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                        {userData.cep}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Logradouro
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="logradouro"
                        value={userData.logradouro}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Rua, Avenida, etc."
                      />
                    ) : (
                      <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                        {userData.logradouro}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Número
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="numero"
                        value={userData.numero}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="123"
                      />
                    ) : (
                      <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                        {userData.numero}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Complemento
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="complemento"
                        value={userData.complemento}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Apartamento, bloco, etc."
                      />
                    ) : (
                      <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                        {userData.complemento}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bairro
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="bairro"
                        value={userData.bairro}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Nome do bairro"
                      />
                    ) : (
                      <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                        {userData.bairro}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cidade
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="cidade"
                        value={userData.cidade}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Nome da cidade"
                      />
                    ) : (
                      <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                        {userData.cidade}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Estado
                    </label>
                    {isEditing ? (
                      <select
                        name="estado"
                        value={userData.estado}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                      </select>
                    ) : (
                      <div className="px-4 py-2 bg-gray-50 rounded-lg text-gray-800">
                        {userData.estado}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Botões de ação para mobile */}
            {isEditing && (
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-full sm:w-auto"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full sm:w-auto flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Salvar Alterações
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Seção de segurança */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-8">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Segurança da Conta
            </h2>
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Alterar Senha</h3>
                <p className="mt-1 text-gray-600">Recomendamos que você altere sua senha periodicamente</p>
              </div>
              <button className="mt-4 md:mt-0 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setIsPasswordModalOpen(true)}>
                Alterar Senha
              </button>
            </div>

            {/* <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Autenticação de Dois Fatores</h3>
                <p className="mt-1 text-gray-600">Adicione uma camada extra de segurança à sua conta</p>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <span className="text-red-600 font-medium mr-4">Desativada</span>
                <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Ativar
                </button>
              </div>
            </div> */}
          </div>
        </div>


      </main>
    </div>
  );
};

export default UserProfilePage;