import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/dashboard.css';

const fetchWithTimeout = async (url, options = {}, timeout = 5000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    options.signal = controller.signal;

    try {
        const response = await fetch(url, options);
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        throw error;
    }
};

const DashboardUser = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [planosContratados, setPlanosContratados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const { userId } = useParams();
    const [token, setToken] = useState(() => {
        if (typeof localStorage !== 'undefined') {
            return localStorage.getItem('jwt_token');
        }
        return null;
    });

    // Novos estados para o modal do QR Code
    const [showQrModal, setShowQrModal] = useState(false);
    const [qrCodeImage, setQrCodeImage] = useState('');
    const [isQrLoading, setIsQrLoading] = useState(false);
    const [qrErrorMessage, setQrErrorMessage] = useState('');
    const [activeTab, setActiveTab] = useState('tab1');

    const qrCodes = {
        tab1: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Tab1-Example',
        tab2: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Tab2-Example',
        tab3: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Tab3-Example'
    };

    // Simular carregamento de dados de um back-end
    useEffect(() => {
        const fetchPlanos = async () => {
            setIsLoading(true);
            try {
                if (!userId) return;
                const res = await fetchWithTimeout(
                    `${import.meta.env.VITE_URL_API_DB}buscar-planos-contratados/${userId}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_URL_API_KEY}`,
                        },
                    },
                    1000
                );
                const data = await res.json();
                if (parseInt(data.status, 10) === 1) {
                    setPlanosContratados(data.data);
                }
            } catch (e) {
                console.warn('Erro ao buscar planos:', e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPlanos();
    }, [userId]);

    useEffect(() => {
        if (!token) {
            window.location.href = '/login';
            return;
        }
        const checkSession = async () => {
            try {
                const res = await fetchWithTimeout(
                    `${import.meta.env.VITE_URL_API_DB}check-session/${token}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_URL_API_KEY}`,
                        },
                    },
                    1000
                );
                const data = await res.json();
                if (typeof data !== 'object' || parseInt(data.status, 10) !== 1) {
                    window.location.href = '/login';
                }
            } catch {
                window.location.href = '/login';
            }
        };

        const timer = setTimeout(checkSession, 15000);
        return () => clearTimeout(timer);
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem('jwt_token');
        setToken(null);
        window.location.href = '/login';
    };

    // Simulação da requisição ao backend para gerar QR Code
    const generateQrCode = async (planoId) => {
        setIsQrLoading(true);
        setQrErrorMessage('');
        setQrCodeImage('');
        setShowQrModal(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simula atraso da rede

            // QR Code de exemplo em base64 (um QR code simples para 'Hello World')
            const mockQrCodeBase64 = "data:image/png;base64,iVBORw0KGg"

            setQrCodeImage(mockQrCodeBase64);

        } catch (error) {
            setQrErrorMessage(error.message || 'Erro ao gerar QR Code');
        } finally {
            setIsQrLoading(false);
        }
    };

    const handleProfile = () => {
        window.location.href = '/profile-usuario/' + userId;
    };


    // Filtrar dados com base na pesquisa e status
    const filteredPlanos = planosContratados.filter(plano => {
        const matchesSearch = plano.nome.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || plano.status.toLowerCase() === filterStatus.toLowerCase();
        return matchesSearch && matchesStatus;
    });

    const getStatusColorClass = (status) => {
        switch (status.toLowerCase()) {
            case 'ativo':
                return 'bg-green-100 text-green-800';
            case 'em análise':
                return 'bg-yellow-100 text-yellow-800';
            case 'expirado':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getProgressBarColorClass = (status) => {
        switch (status.toLowerCase()) {
            case 'ativo':
                return 'bg-green-500';
            case 'em análise':
                return 'bg-yellow-500';
            case 'expirado':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 font-sans antialiased text-gray-800">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-700 to-purple-700 shadow-xl animate-fade-in-down">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="text-white text-2xl font-extrabold tracking-tight transform hover:scale-105 transition-transform duration-300">Simplizei</div>
                        </div>

                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className="relative md:block hidden">
                                <input
                                    type="text"
                                    placeholder="Pesquisar planos..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="px-4 py-2 rounded-full bg-indigo-600 bg-opacity-70 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white focus:bg-indigo-600 transition-all duration-300 ease-in-out text-sm w-48 lg:w-64"
                                />
                                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>

                            {/* Ícone de pesquisa para mobile */}
                            <button className="md:hidden text-white p-2 rounded-full hover:bg-indigo-600 transition-colors duration-300"
                                onClick={() => document.getElementById('mobile-search').classList.toggle('hidden')}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>

                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center focus:outline-none transform hover:scale-105 transition-transform duration-300"
                                >
                                    <img
                                        src="/assets/icons/3237472.png"
                                        alt="User"
                                        className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                                    />
                                    <svg
                                        className={`ml-2 w-5 h-5 text-white transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {isDropdownOpen && (
                                    <div
                                        className="absolute right-0 mt-3 w-56 rounded-xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 z-50 transform origin-top-right animate-scale-in"
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        <div className="py-1">
                                            <button
                                                onClick={handleProfile}
                                                className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 flex items-center transition-colors duration-200 rounded-t-xl"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                Meu Perfil
                                            </button>

                                            <button
                                                onClick={handleLogout}
                                                className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 flex items-center transition-colors duration-200 rounded-b-xl"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                Sair
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Barra de pesquisa mobile (fora do flex para ocupar largura total) */}
                <div id="mobile-search" className="md:hidden px-4 pb-4 hidden">
                    <input
                        type="text"
                        placeholder="Pesquisar planos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 rounded-full bg-indigo-600 bg-opacity-70 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white focus:bg-indigo-600 transition-all duration-300 ease-in-out"
                    />
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
                    {/* Header do Card */}
                    <div className="px-6 py-6 sm:px-8 border-b border-gray-100 bg-gray-50 bg-opacity-80">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">Meus Planos Contratados</h1>
                                <p className="mt-2 text-lg text-gray-600">Visão geral e status dos seus planos ativos.</p>
                            </div>

                            <div className="mt-6 md:mt-6 flex flex-col sm:flex-row flex-wrap gap-4">
                                <div className="relative w-full sm:w-auto">
                                    <select
                                        value={filterStatus}
                                        onChange={(e) => setFilterStatus(e.target.value)}
                                        className="appearance-none block w-full bg-white border border-gray-300 rounded-full py-2.5 pl-4 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 shadow-sm"
                                    >
                                        <option value="all">Todos os Status</option>
                                        <option value="ativo">Ativo</option>
                                        <option value="em análise">Em Análise</option>
                                        <option value="expirado">Expirado</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>


                                <button
                                    onClick={() => generateQrCode('123')}
                                    className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 tooltip">
                                    Novo Plano
                                    <span className="tooltip-text">Escolha o plano</span>
                                </button>

                                <a
                                    href={`https://wa.me/234234234`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="duration-300 ease-in-out transform hover:scale-110 tooltip"
                                    data-tooltip="Fale no WhatsApp"
                                >
                                    <img src="/assets/icons/whatsapp.png" alt="Contato" className='w-10 h-10' />
                                    <span className="tooltip-text">Fale no WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Tabela */}
                    <div className="overflow-x-auto">
                        {isLoading ? (
                            <div className="py-20 flex justify-center items-center flex-col">
                                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
                                <p className="mt-4 text-gray-600 text-lg animate-pulse">Carregando planos...</p>
                            </div>
                        ) : filteredPlanos.length === 0 ? (
                            <div className="py-20 text-center animate-fade-in">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-gray-300 animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="mt-6 text-xl font-semibold text-gray-900">Nenhum plano encontrado</h3>
                                <p className="mt-2 text-gray-500">Tente ajustar sua pesquisa ou filtros.</p>
                            </div>
                        ) : (
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nome do Plano
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Vigência
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Progresso do Contrato
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredPlanos.map((plano) => (
                                        <tr key={plano.id} className="hover:bg-indigo-50 transition-colors duration-200 ease-in-out animate-fade-in-right">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                #{plano.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <div className="flex items-center">
                                                    <div className="hidden md:block bg-indigo-100 rounded-xl p-3 mr-3 shadow-sm transform hover:scale-110 transition-transform duration-200">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="font-semibold text-lg text-gray-900">{plano.nome}</div>
                                                        <div className="text-gray-500 text-sm mt-1">ID Contrato: {plano.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                {plano.vigencia}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColorClass(plano.status)} shadow-sm`}>
                                                    {plano.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-32 bg-gray-200 rounded-full h-2.5 overflow-hidden shadow-inner">
                                                        <div
                                                            className={`h-full rounded-full transition-all duration-500 ease-out ${getProgressBarColorClass(plano.status)}`}
                                                            style={{ width: `${plano.progresso}%` }}
                                                        ></div>
                                                    </div>
                                                    <div className="ml-3 text-sm font-medium text-gray-600">{plano.progresso}%</div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Rodapé da tabela */}
                    <div className="px-6 py-5 sm:px-8 border-t border-gray-100 bg-gray-50 bg-opacity-80 flex flex-col sm:flex-row items-center justify-between rounded-b-3xl">
                        <div className="text-sm text-gray-700 mb-4 sm:mb-0">
                            Mostrando <span className="font-semibold text-indigo-700">{filteredPlanos.length}</span> de <span className="font-semibold text-indigo-700">{planosContratados.length}</span> planos
                        </div>

                        <div className="flex space-x-3">
                            <button className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:-translate-x-0.5">
                                Anterior
                            </button>
                            <button className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:translate-x-0.5">
                                Próximo
                            </button>
                        </div>
                    </div>
                </div>
                {showQrModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white px-5 rounded-lg shadow-lg max-w-lg w-full">
                            <div className="flex justify-between items-center mb-4 pt-0">
                                <h1 className="text-lg font-semibold">Escaneie o QR Code </h1>
                                <button
                                    onClick={() => setShowQrModal(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    Fechar
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="border-b border-gray-200">
                                <nav className="flex -mb-px">
                                    <button
                                        onClick={() => setActiveTab('tab1')}
                                        className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'tab1' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                    >
                                        PADRÃO
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('tab2')}
                                        className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'tab2' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                    >
                                        MULTIBENEFÍCIOS
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('tab3')}
                                        className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'tab3' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                    >
                                        EXPERTS ESSENCIAL
                                    </button>
                                </nav>
                            </div>

                            {/* Conteúdo das Tabs */}
                            <div className="py-4">
                                {activeTab === 'tab1' && (
                                    <div className="flex flex-col items-center">
                                        <img src={qrCodes.tab1} alt="Plano Padrão" className="max-w-full h-auto mb-4" />
                                        <p className="text-gray-600">Escolha o plano para efetuar o pagamento</p>
                                    </div>
                                )}

                                {activeTab === 'tab2' && (
                                    <div className="flex flex-col items-center">
                                        <img src={qrCodes.tab2} alt="Plano Multibenefícios" className="max-w-full h-auto mb-4" />
                                        <p className="text-gray-600">Escolha o plano para efetuar o pagamento</p>
                                    </div>
                                )}

                                {activeTab === 'tab3' && (
                                    <div className="flex flex-col items-center">
                                        <img src={qrCodes.tab3} alt="Plano Experts Essencial" className="max-w-full h-auto mb-4" />
                                        <p className="text-gray-600">Escolha o plano para efetuar o pagamento</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </main>

        </div>
    );
};

export default DashboardUser;