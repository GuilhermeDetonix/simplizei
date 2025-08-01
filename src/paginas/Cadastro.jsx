import { useState } from 'react';
import Header from '../components/Header';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const etapas = [
  'Informações Básicas',
  'Dados Pessoais',
  'Endereço',
  'Dados Empresariais'
];

const formatPhoneNumber = (input) => {
  // Remove tudo que não é dígito
  const numbers = input.replace(/\D/g, '');

  let formatted = '';

  if (numbers.length > 0) {
    formatted += `(${numbers.substring(0, 2)}`;
  }
  if (numbers.length > 2) {
    formatted += `) ${numbers.substring(2, 3)}`;
  }
  if (numbers.length > 3) {
    formatted += `.${numbers.substring(3, 8)}`;
  }
  if (numbers.length > 8) {
    formatted += `-${numbers.substring(8, 12)}`;
  }

  return formatted;
};

const CadastroPage = () => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [errors, setErrosToken] = useState(false);
  const [showToken, setShowToken] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    cep: '',
    phone: '',
    endereco: '',
    cidade: '',
    estado: '',
    complemento: '',
    numero: '',
    bairro: '',
    empresa: '',
    atividade: '',
    cnae: '',
    outras_atividades: '',
    token: '',
    nome_empresa: ''
  });
  const [formEnviado, setFormEnviado] = useState(false);

  const handleChange = async (e) => {
    let { name, value } = e.target;

    if (name === 'cpf') {
      value = value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    if (name === 'phone') {
      const numbers = value.replace(/\D/g, '');
      const formattedValue = formatPhoneNumber(numbers);
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
      return;
    }

    if (name === 'token') {
      validateForm();
    }

    if (name === 'cep') {
      // Remove todos os não dígitos
      let rawValue = value.replace(/\D/g, '');

      // Aplica a máscara apenas se tiver dígitos suficientes
      let formattedValue = rawValue;
      if (rawValue.length > 5) {
        formattedValue = rawValue.replace(/^(\d{2})(\d{3})(\d{0,3})/, '$1.$2-$3');
      } else if (rawValue.length > 2) {
        formattedValue = rawValue.replace(/^(\d{2})(\d{0,3})/, '$1.$2');
      }

      // Atualiza o estado com o valor formatado
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));

      // Faz a busca do CEP apenas quando estiver completo (8 dígitos)
      if (rawValue.length === 8 && /https/g.test(location.protocol)) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${rawValue}/json/`);
          const cepData = await response.json();

          if (!cepData.erro) {
            setFormData(prev => ({
              ...prev,
              endereco: cepData.logradouro || '',
              cidade: cepData.localidade || '',
              estado: cepData.uf || '',
              bairro: cepData.bairro || '',
            }));
          }
        } catch (error) {
          console.error('Erro ao buscar CEP:', error);
        }
      } else if (rawValue.length === 8) {
        let cepData = {
          "cep": "01001-000",
          "logradouro": "Praça da Sé",
          "complemento": "lado ímpar",
          "unidade": "",
          "bairro": "Sé",
          "localidade": "São Paulo",
          "uf": "SP",
          "estado": "São Paulo",
          "regiao": "Sudeste",
          "ibge": "3550308",
          "gia": "1004",
          "ddd": "11",
          "siafi": "7107"
        }
        if (!cepData.erro) {
          setFormData(prev => ({
            ...prev,
            endereco: cepData.logradouro || '',
            cidade: cepData.localidade || '',
            estado: cepData.uf || '',
            bairro: cepData.bairro || '',
          }));
        }
      } else {
        setFormData(prev => ({
          ...prev,
          endereco: '',
          cidade: '',
          estado: '',
          bairro: '',
        }));
      }
      return
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const avancarEtapa = () => {
    if (etapaAtual < etapas.length - 1) {
      setEtapaAtual(etapaAtual + 1);
    }
  };

  const voltarEtapa = () => {
    if (etapaAtual > 0) {
      setEtapaAtual(etapaAtual - 1);
    }
  };

  // Secure password checker
  const isPasswordSecure = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{12,}$/.test(password) &&
      !/(12345678|password|senha|123456789|qwertyui)/i.test(password);
  };

  const mostrarSenha = () => {
    showToken ? setShowToken(false) : setShowToken(true);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.token) {
      newErrors.token = 'Token é obrigatório';
    } else if (!isPasswordSecure(formData.token)) {
      newErrors.token = 'Token deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números';
    }

    setErrosToken(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (etapaAtual === etapas.length - 1) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 minutes

      fetch(import.meta.env.VITE_URL_API_DB + 'cadastrar-empresa',
        {
          signal: controller.signal,
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + import.meta.env.VITE_URL_API_KEY // Se aplicável
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          clearTimeout(timeoutId);
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          if (data.error) throw new Error(data.error);
          if (parseInt(data.status) === 1) {
            sessionStorage.setItem('jwt_token', data.token);
            setFormEnviado(true);
          } else {
            alert(data.message || 'Erro ao enviar formulário');
          }
        })
        .catch(error => {
          if (error.name === 'AbortError') {
            Toaster.error('Requisição cancelada devido ao tempo de espera expirar');
          } else {
            alert('Fetch error:', error);
          }
        });
    }
  };

  if (formEnviado) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div>
          {/* Seu conteúdo */}
          <Toaster position="top-right" />
        </div>
        <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 text-center animate-fade-in">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Cadastro concluído!</h2>
          <p className="text-gray-700 mb-6">Obrigado por completar seu cadastro. Seus dados foram recebidos com sucesso.</p>
          <button
            onClick={() => {
              setEtapaAtual(0);
              setFormEnviado(false);
              setFormData({
                nome: '',
                email: '',
                cpf: '',
                cep: '',
                phone: '',
                endereco: '',
                cidade: '',
                estado: '',
                complemento: '',
                numero: '',
                bairro: '',
                empresa: '',
                atividade: '',
                cnae: '',
                outras_atividades: '',
                nome_empresa: '',
                token: ''
              });
              location.href = '/login';
            }}
            className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Novo Cadastro
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <Header />
      <section className="max-h-screen flex flex-col lg:flex-row bg-gray-100 overflow-hidden">
        {/* Coluna da Imagem */}
        <div className="hidden lg:flex lg:w-1/2 justify-center bg-white">
          <img
            src="/assets/img/bemvindo.jpg"
            alt="Banner"
            className="max-w-full h-auto animate-fade-in"
          />
        </div>

        {/* Coluna do Formulário */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 h-full lg:max-h-screen">
          <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6 space-y-6 animate-fade-in-down">
            {/* Timeline */}
            <div className="flex items-center justify-between mb-4">
              {etapas.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center relative h-[70px]">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-semibold
                  ${index <= etapaAtual ? 'bg-blue-600' : 'bg-gray-300'}`}
                  >
                    {index + 1}
                  </div>
                  <span className={`text-xs mt-2 text-center ${index === etapaAtual ? 'font-bold' : ''}`}>
                    {item}
                  </span>
                  {index < etapas.length - 1 && (
                    <div className={`absolute top-4 left-1/2 w-full h-0.5 ${index < etapaAtual ? 'bg-blue-600' : 'bg-gray-300'} z-[-1]`}></div>
                  )}
                </div>
              ))}
            </div>

            {/* Formulário dinâmico */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {etapaAtual === 0 && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800">{etapas[etapaAtual]}</h3>
                  <input
                    name="nome"
                    type="text"
                    placeholder="Nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <div className='relative'>
                    <input
                      name="token"
                      type={showToken ? "text" : "password"}
                      placeholder="Escreva sua senha"
                      autoComplete='off'
                      value={formData.token}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 rounded-md border ${errors.token ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 flex items-center text-gray-500 hover:text-gray-700"
                      onClick={() => setShowToken(!showToken)}
                      aria-label={showToken ? "Ocultar token" : "Mostrar token"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={showToken ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}
                        />
                      </svg>
                    </button>

                    {errors.token && (
                      <p className="text-red-500 text-xs mt-1">{errors.token}</p>
                    )}
                  </div>
                </>
              )}

              {etapaAtual === 1 && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800">{etapas[etapaAtual]}</h3>
                  <input
                    name="cpf"
                    type="text"
                    placeholder="CPF"
                    value={formData.cpf}
                    onChange={handleChange}
                    maxLength={14}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="phone"
                    type="text"
                    placeholder="Telefone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={17}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </>
              )}

              {etapaAtual === 2 && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800">{etapas[etapaAtual]}</h3>
                  <h4>{etapas[etapaAtual] === 'Endereço' && (
                    <a href='https://soaresnobre.com/panel/core/cep.php' title="Buscar CEP" target='_blank' className="w-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-4.35-4.35M18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                        />
                      </svg></a>
                  )}</h4>
                  <input
                    name="cep"
                    type="text"
                    placeholder="CEP"
                    value={formData.cep}
                    onChange={handleChange}
                    maxLength={10}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="endereco"
                    type="text"
                    placeholder="Endereço"
                    value={formData.endereco}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="cidade"
                    type="text"
                    placeholder="Cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <select
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecione um estado</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                  <input
                    name="bairro"
                    type="text"
                    placeholder="Bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="numero"
                    type="number"
                    placeholder="Número"
                    value={formData.numero}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="complemento"
                    type="text"
                    placeholder="Complemento"
                    value={formData.complemento}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </>
              )}

              {etapaAtual === 3 && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800">{etapas[etapaAtual]}</h3>
                  <input
                    name="empresa"
                    type="text"
                    placeholder="Nome da empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <select
                    name="atividade"
                    value={formData.atividade}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecione uma atividade...</option>
                    <option value="ti">Serviços de TI</option>
                    <option value="administrativos">Serviços Administrativos</option>
                    <option value="comercio">Comércio</option>
                    <option value="medicina">Medicina</option>
                    <option value="psicologia">Psicologia e outros saúde</option>
                    <option value="marketing">Marketing / Publicidade</option>
                    <option value="engenharia">Engenharia / Arquitetura</option>
                    <option value="educacao">Educação / Cursos</option>
                    <option value="advocacia">Advocacia</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="representacao">Representação Comercial</option>
                    <option value="outra">Minha atividade não está na lista</option>
                  </select>
                  <select
                    name="cnae"
                    value={formData.cnae}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled>Selecione a atividade</option>
                    <optgroup label="Serviços de TI">
                      <option value="6201501">Desenvolvimento de programas de computador sob encomenda</option>
                      <option value="6202300">Desenvolvimento e licenciamento de programas de computador customizáveis</option>
                      <option value="6203100">Desenvolvimento e licenciamento de programas de computador não-customizáveis</option>
                      <option value="6204000">Consultoria em tecnologia da informação</option>
                      <option value="6209100">Suporte técnico, manutenção e outros serviços em tecnologia da informação</option>
                      <option value="6311900">Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet</option>
                    </optgroup>

                    <optgroup label="Serviços Administrativos">
                      <option value="8211300">Serviços combinados de escritório e apoio administrativo</option>
                      <option value="8219999">Preparação de documentos e serviços especializados de apoio administrativo não especificados anteriormente</option>
                      <option value="8291100">Atividades de cobrança e informações cadastrais</option>
                      <option value="8299799">Outras atividades de serviços prestados principalmente às empresas não especificadas anteriormente</option>
                    </optgroup>

                    <optgroup label="Comércio">
                      <option value="4711301">Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - hipermercados</option>
                      <option value="4711302">Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - supermercados</option>
                      <option value="4712100">Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - minimercados, mercearias e armazéns</option>
                      <option value="4751201">Comércio varejista especializado de equipamentos e suprimentos de informática</option>
                      <option value="4781400">Comércio varejista de artigos do vestuário e acessórios</option>
                      <option value="4619200">Representantes comerciais e agentes do comércio de mercadorias em geral não especializado</option>
                    </optgroup>

                    <optgroup label="Medicina">
                      <option value="8610101">Atividades de atendimento hospitalar, exceto pronto-socorro e unidades para atendimento a urgências</option>
                      <option value="8610102">Atividades de atendimento em pronto-socorro e unidades hospitalares para atendimento a urgências</option>
                      <option value="8630501">Atividade médica ambulatorial com recursos para realização de procedimentos cirúrgicos</option>
                      <option value="8630502">Atividade médica ambulatorial com recursos para realização de exames complementares</option>
                      <option value="8630503">Atividade médica ambulatorial restrita a consultas</option>
                    </optgroup>

                    <optgroup label="Psicologia e outros saúde">
                      <option value="8650003">Atividades de psicologia e psicanálise</option>
                      <option value="8650002">Atividades de profissionais da nutrição</option>
                      <option value="8650004">Atividades de fisioterapia</option>
                      <option value="8650006">Atividades de fonoaudiologia</option>
                      <option value="8690901">Atividades de enfermagem</option>
                      <option value="8690904">Atividades de podologia</option>
                    </optgroup>

                    <optgroup label="Marketing / Publicidade">
                      <option value="7311400">Agências de publicidade</option>
                      <option value="7319002">Promoção de vendas</option>
                      <option value="7319003">Marketing direto</option>
                      <option value="7319004">Consultoria em publicidade</option>
                      <option value="7320300">Pesquisas de mercado e de opinião pública</option>
                    </optgroup>

                    <optgroup label="Engenharia / Arquitetura">
                      <option value="7112000">Serviços de engenharia</option>
                      <option value="7111100">Serviços de arquitetura</option>
                      <option value="7119703">Serviços de desenhos técnicos relacionados à arquitetura e engenharia</option>
                      <option value="7119799">Atividades técnicas relacionadas à engenharia e arquitetura não especificadas anteriormente</option>
                    </optgroup>

                    <optgroup label="Educação / Cursos">
                      <option value="8599604">Cursos de pilotagem</option>
                      <option value="8599605">Cursos de idiomas</option>
                      <option value="8599603">Treinamento em informática</option>
                      <option value="8599699">Outras atividades de ensino não especificadas anteriormente</option>
                      <option value="8541400">Educação profissional de nível técnico</option>
                    </optgroup>

                    <optgroup label="Advocacia">
                      <option value="6911701">Serviços advocatícios</option>
                    </optgroup>

                    <optgroup label="Consultoria">
                      <option value="7020400">Atividades de consultoria em gestão empresarial, exceto consultoria técnica específica</option>
                      <option value="7490199">Outras atividades profissionais, científicas e técnicas não especificadas anteriormente</option>
                    </optgroup>

                    <optgroup label="Representação Comercial">
                      <option value="4619200">Representantes comerciais e agentes do comércio de mercadorias em geral não especializado</option>
                      <option value="4611700">Representantes comerciais e agentes do comércio de matérias-primas agrícolas e animais vivos</option>
                    </optgroup>

                    <option value="outra">Minha atividade não está na lista</option>
                  </select>
                  <input
                    name="outras_atividades"
                    type="text"
                    placeholder="Outras atividades"
                    value={formData.outras_atividades}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </>
              )}

              <div className="flex justify-between mt-6">
                {etapaAtual > 0 && (
                  <button
                    type="button"
                    onClick={voltarEtapa}
                    className="px-6 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition"
                  >
                    Voltar
                  </button>
                )}

                {etapaAtual < etapas.length - 1 ? (
                  <button
                    type="button"
                    onClick={avancarEtapa}
                    className="ml-auto px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Avançar
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-6 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
                  >
                    Finalizar Cadastro
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CadastroPage;