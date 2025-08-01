import React, { useState, useEffect } from 'react';
import { FiX, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

const ContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenShown, setHasBeenShown] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        celular: '',
        email: '',
        cidade: '',
        atividade: '',
        contatoPreferido: 'whatsapp'
    });

    useEffect(() => {
        const handleMouseLeave = (event) => {
            if (!hasBeenShown && event.clientY < 50) {
                setIsOpen(true);
                setHasBeenShown(true);
            }
        };

        const handleBlur = () => {
            if (!hasBeenShown) {
                setIsOpen(true);
                setHasBeenShown(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('blur', handleBlur);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('blur', handleBlur);
        };
    }, [hasBeenShown]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'celular') {
            const raw = value.replace(/\D/g, '');
            let formatted = raw;
            if (raw.length > 2) formatted = `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
            if (raw.length > 7) formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7, 11)}`;
            setFormData(prev => ({ ...prev, [name]: formatted }));
            return;
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando dados:', formData);
        alert('Mensagem enviada com sucesso!');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
            <div className="flex items-center justify-center min-h-screen px-4 py-8">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                    {/* Left */}
                    <div className="bg-[#f7faff] p-8 flex flex-col justify-center hidden lg:block">
                        <h2 className="text-xl font-semibold text-[#0052cc] mb-4">Ficou com alguma dúvida?</h2>
                        <p className="text-gray-600 mb-8">Preencha as informações ao lado que em breve entraremos em contato com você.</p>
                        <img src="/assets/img/woman_tele.png" alt="ilustração" className="rounded-full w-xl h-auto" />
                    </div>

                    {/* Right */}
                    <div className="relative p-8 bg-white">
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                            <FiX size={24} />
                        </button>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative">
                                    <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500">
                                        Nome
                                    </label>
                                    <input 
                                        name="nome" 
                                        value={formData.nome} 
                                        onChange={handleChange} 
                                        required
                                        className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                        placeholder="Nome completo"
                                    />
                                </div>
                                <div className="relative">
                                    <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500">
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
                            </div>

                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500">
                                    E-mail
                                </label>
                                <input 
                                    name="email" 
                                    type="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required
                                    className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                    placeholder="seu_email@mail.com.br"
                                />
                            </div>

                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500">
                                    Cidade
                                </label>
                                <input 
                                    name="cidade" 
                                    value={formData.cidade} 
                                    onChange={handleChange} 
                                    required
                                    className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                    placeholder="Ex: São Paulo"
                                />
                            </div>

                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500">
                                    Descrição da atividade
                                </label>
                                <input 
                                    name="atividade" 
                                    value={formData.atividade} 
                                    onChange={handleChange} 
                                    required
                                    className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc] focus:ring-opacity-50 transition"
                                    placeholder="Ex: programador, consultor de marketing"
                                />
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-sm font-medium text-gray-600">Como prefere que entremos em contato com você?</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <label htmlFor="whatsapp" className="flex items-center justify-center p-4 border border-gray-300 rounded-md cursor-pointer hover:border-[#0052cc] transition"
                                        style={{ 
                                            backgroundColor: formData.contatoPreferido === 'whatsapp' ? 'rgba(85, 207, 140, 0.2)' : 'white',
                                            borderColor: formData.contatoPreferido === 'whatsapp' ? '#0052cc' : '#d1d5db'
                                        }}>
                                        <input 
                                            id="whatsapp" 
                                            name="contatoPreferido" 
                                            type="radio" 
                                            value="whatsapp" 
                                            checked={formData.contatoPreferido === 'whatsapp'} 
                                            onChange={handleChange}  
                                            className="hidden" 
                                        />
                                        <FiMessageSquare className="mr-2 text-[#0052cc]" /> 
                                        <span className="font-medium">VIA WHATSAPP</span>
                                    </label>
                                    <label htmlFor="ligacao" className="flex items-center justify-center p-4 border border-gray-300 rounded-md cursor-pointer hover:border-[#0052cc] transition"
                                        style={{ 
                                            backgroundColor: formData.contatoPreferido === 'ligacao' ? 'rgba(85, 207, 140, 0.2)' : 'white',
                                            borderColor: formData.contatoPreferido === 'ligacao' ? '#0052cc' : '#d1d5db'
                                        }}>
                                        <input 
                                            id="ligacao" 
                                            name="contatoPreferido" 
                                            type="radio" 
                                            value="ligacao" 
                                            checked={formData.contatoPreferido === 'ligacao'} 
                                            onChange={handleChange} 
                                            className="hidden" 
                                        />
                                        <FiPhone className="mr-2 text-[#0052cc]" /> 
                                        <span className="font-medium">VIA LIGAÇÃO</span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-6">
                                <button 
                                    type="button" 
                                    onClick={() => setIsOpen(false)} 
                                    className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition font-medium"
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit" 
                                    className="bg-[#0052cc] text-white px-6 py-3 rounded-md hover:bg-[#003d99] transition font-medium"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;