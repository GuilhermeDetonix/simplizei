import React, { useState, useEffect } from 'react';
import { FiX, FiUser, FiMail, FiPhone, FiBriefcase, FiDollarSign, FiCalendar, FiFileText } from 'react-icons/fi';

const CadastroFuncionario = ({ onClose, setState = true }) => {
    const [isOpen, setIsOpen] = useState(setState);
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        dataNascimento: '',
        cpf: '',
        rg: '',
        celular: '',
        email: '',
        endereco: '',
        cidade: '',
        estado: '',
        formacao: '',
        experiencia: '',
        cargoDesejado: '',
        pretensaoSalarial: '',
        disponibilidade: 'integral',
        comoConheceu: '',
        curriculo: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (name === 'celular') {
            const raw = value.replace(/\D/g, '');
            let formatted = raw;
            if (raw.length > 2) formatted = `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
            if (raw.length > 7) formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7, 11)}`;
            setFormData(prev => ({ ...prev, [name]: formatted }));
            return;
        }

        if (name === 'cpf') {
            const raw = value.replace(/\D/g, '');
            let formatted = raw;
            if (raw.length > 3) formatted = `${raw.slice(0, 3)}.${raw.slice(3)}`;
            if (raw.length > 6) formatted = `${raw.slice(0, 3)}.${raw.slice(3, 6)}.${raw.slice(6)}`;
            if (raw.length > 9) formatted = `${raw.slice(0, 3)}.${raw.slice(3, 6)}.${raw.slice(6, 9)}-${raw.slice(9, 11)}`;
            setFormData(prev => ({ ...prev, [name]: formatted }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setIsOpen(false);
        onClose();
    };

    useEffect(() => {
        setIsOpen(setState);
    }, [setState]);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleClose}></div>
            <div className="flex items-center justify-center min-h-screen px-4 py-8">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden">
                    <div className="relative p-8 bg-white">
                        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                            <FiX size={24} />
                        </button>

                        <h2 className="text-2xl font-bold text-[#0052cc] mb-2 text-center">Cadastro para Trabalhar Conosco</h2>
                        <p className="text-gray-600 mb-6 text-center">Preencha o formulário abaixo para se candidatar às vagas em nossa empresa</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Seção de Dados Pessoais */}
                            <div className="border-b border-gray-200 pb-6 mb-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                                    <FiUser className="mr-2" /> Dados Pessoais
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            Nome Completo
                                        </label>
                                        <input 
                                            name="nomeCompleto" 
                                            value={formData.nomeCompleto} 
                                            onChange={handleChange} 
                                            required
                                            className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            Data de Nascimento
                                        </label>
                                        <input 
                                            name="dataNascimento" 
                                            type="date" 
                                            value={formData.dataNascimento} 
                                            onChange={handleChange} 
                                            required
                                            className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            CPF
                                        </label>
                                        <input 
                                            name="cpf" 
                                            value={formData.cpf} 
                                            onChange={handleChange} 
                                            required 
                                            maxLength={14}
                                            className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                            placeholder="000.000.000-00"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            RG
                                        </label>
                                        <input 
                                            name="rg" 
                                            value={formData.rg} 
                                            onChange={handleChange} 
                                            required
                                            className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                            placeholder="00.000.000-0"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Seção de Contato */}
                            <div className="border-b border-gray-200 pb-6 mb-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                                    <FiPhone className="mr-2" /> Contato
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            Celular
                                        </label>
                                        <input 
                                            name="celular" 
                                            value={formData.celular} 
                                            onChange={handleChange} 
                                            required 
                                            maxLength={15}
                                            className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                            placeholder="(00) 00000-0000"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            E-mail
                                        </label>
                                        <input 
                                            name="email" 
                                            type="email" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            required
                                            className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                            placeholder="seu@email.com"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            Endereço
                                        </label>
                                        <input 
                                            name="endereco" 
                                            value={formData.endereco} 
                                            onChange={handleChange} 
                                            required
                                            className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                            placeholder="Rua, número, complemento"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="relative">
                                            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                                Cidade
                                            </label>
                                            <input 
                                                name="cidade" 
                                                value={formData.cidade} 
                                                onChange={handleChange} 
                                                required
                                                className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                                placeholder="Cidade"
                                            />
                                        </div>

                                        <div className="relative">
                                            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                                Estado
                                            </label>
                                            <select 
                                                name="estado" 
                                                value={formData.estado} 
                                                onChange={handleChange} 
                                                required
                                                className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                            >
                                                <option value="">Selecione</option>
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
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Seção de Formação e Experiência */}
                            <div className="border-b border-gray-200 pb-6 mb-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                                    <FiBriefcase className="mr-2" /> Formação e Experiência
                                </h3>

                                <div className="grid grid-cols-1 gap-6">
                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            Formação Acadêmica
                                        </label>
                                        <textarea 
                                            name="formacao" 
                                            value={formData.formacao} 
                                            onChange={handleChange} 
                                            required
                                            className="w-full min-h-[100px] border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                            placeholder="Formação acadêmica, cursos, certificações"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            Experiência Profissional
                                        </label>
                                        <textarea 
                                            name="experiencia" 
                                            value={formData.experiencia} 
                                            onChange={handleChange} 
                                            required
                                            className="w-full min-h-[100px] border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                            placeholder="Experiências profissionais anteriores"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            Cargo Desejado
                                        </label>
                                        <input 
                                            name="cargoDesejado" 
                                            value={formData.cargoDesejado} 
                                            onChange={handleChange} 
                                            required
                                            className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                            placeholder="Cargo desejado"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Seção de Pretensão e Disponibilidade */}
                            <div className="border-b border-gray-200 pb-6 mb-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                                    <FiDollarSign className="mr-2" /> Pretensão e Disponibilidade
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            Pretensão Salarial
                                        </label>
                                        <input 
                                            name="pretensaoSalarial" 
                                            value={formData.pretensaoSalarial} 
                                            onChange={handleChange} 
                                            required
                                            className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                            placeholder="R$ 0,00"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            Disponibilidade
                                        </label>
                                        <select 
                                            name="disponibilidade" 
                                            value={formData.disponibilidade} 
                                            onChange={handleChange} 
                                            required
                                            className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                        >
                                            <option value="integral">Integral (8h)</option>
                                            <option value="meioPeriodo">Meio Período (4h)</option>
                                            <option value="flexivel">Horário Flexível</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <div className="relative">
                                        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 transition-all">
                                            Como nos conheceu?
                                        </label>
                                        <select 
                                            name="comoConheceu" 
                                            value={formData.comoConheceu} 
                                            onChange={handleChange}
                                            className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                        >
                                            <option value="">Como você conheceu nossa empresa?</option>
                                            <option value="linkedin">LinkedIn</option>
                                            <option value="indicação">Indicação</option>
                                            <option value="site">Site da Empresa</option>
                                            <option value="redes_sociais">Redes Sociais</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Termos e Condições */}
                            <div className="flex items-start mb-8">
                                <div className="flex items-center h-5">
                                    <input 
                                        id="terms" 
                                        name="terms" 
                                        type="checkbox" 
                                        required
                                        className="focus:ring-[#0052cc] h-5 w-5 text-[#0052cc] border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-medium text-gray-700">
                                        Concordo com o processamento dos meus dados pessoais para fins de recrutamento, de acordo com a Lei Geral de Proteção de Dados (LGPD).
                                    </label>
                                </div>
                            </div>

                            {/* Botões de Ação */}
                            <div className="flex justify-between pt-4">
                                <button 
                                    type="button" 
                                    onClick={handleClose} 
                                    className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition font-medium"
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit" 
                                    className="bg-[#0052cc] text-white px-6 py-3 rounded-md hover:bg-[#003d99] transition font-medium flex items-center"
                                >
                                    Enviar Candidatura
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CadastroFuncionario;