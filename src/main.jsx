import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './styles/tailwind.css'
import CadastroPage from './paginas/Cadastro';
import AboutUs from './paginas/aboutUs.jsx';
import ContadorOnline from './paginas/ContadorOnline.jsx';
import DepoimentosDeClientes from './paginas/DepoimentosDeClientes';
import TrabalheNaSimplizei from './paginas/TrabalheNaSimplizei';
import AbrirEmpresa from './paginas/AbrirEmpresa';
import DeixarDeSerMei from './paginas/DeixarDeSerMei';
import TroqueDeContador from './paginas/TrocarDeContador';
import EscritorioOnline from './paginas/EscritorioOnline';
import EmissorNFS from './paginas/EmissorNFS';
import ComoFunciona from './paginas/ComoFunciona';
import PlanosSimplizei from './paginas/planos-simplizei';
import TermoDeUso from './paginas/TermoDeUso';
import PoliticaPrivacidade from './paginas/politicaDePrivacidade';
import DashboardTeste from '@/paginas/DashboardTeste';
import DashboardUser from '@/paginas/DashboardUser';
import UserProfile from './paginas/PersonProfile';
import LoginPage from './paginas/login';
import NotFoundPage from './paginas/404';
import CobrarCliente from './paginas/cobrar-seu-cliente';
import ContaPJ from './paginas/ContaPJ';
import CertificadoDigital from './paginas/CertificadoDigital';
import Consultoria from './paginas/Consultoria';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastrar" element={<CadastroPage />} />
        <Route path="/quem-somos" element={<AboutUs />} />
        <Route path="/contador-online" element={<ContadorOnline />} />
        <Route path="/depoimentos-de-clientes" element={<DepoimentosDeClientes />} />
        <Route path="/trabalhe-na-simplizei" element={<TrabalheNaSimplizei />} />
        <Route path="/abrir-empresa" element={<AbrirEmpresa />} />
        <Route path="/deixar-de-ser-mei" element={<DeixarDeSerMei />} />
        <Route path="/trocar-de-contador" element={<TroqueDeContador />} />
        <Route path="/escritorio-contabilidade-online" element={<EscritorioOnline />} />
        <Route path="/emissor-nfs" element={<EmissorNFS />} />
        <Route path="/como-funciona-a-simplizei" element={<ComoFunciona />} />
        <Route path="/servicos" element={<ComoFunciona />} />
        <Route path="/planos-simplizei" element={<PlanosSimplizei />} />
        <Route path="/cobre-seu-cliente" element={<CobrarCliente />} />
        <Route path="/conta-pj" element={<ContaPJ />} />
        <Route path="/certificado-digital" element={<CertificadoDigital />} />
        <Route path="/consultoria" element={<Consultoria />} />

        <Route path="/termo-de-uso" element={<TermoDeUso />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/usuario" element={<DashboardTeste />} />
        <Route path="/painel-do-usuario/:userId" element={<DashboardUser />} />
        <Route path="/profile-usuario/:userId" element={<UserProfile />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

