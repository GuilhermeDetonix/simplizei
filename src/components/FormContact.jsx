import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FormSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        atividade: '',
        cnpj: '',
        duvida: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name: field, value } = e.target;

        if (field === 'telefone') {
            // Remove todos os caracteres não numéricos
            const numericValue = value.replace(/\D/g, '');

            // Limita o tamanho máximo (11 dígitos para telefone brasileiro)
            if (numericValue.length > 11) {
                return;
            }

            // Aplica a máscara de telefone
            let formattedValue = '';
            if (numericValue.length > 0) {
                formattedValue = `(${numericValue.substring(0, 2)}`;
            }
            if (numericValue.length > 2) {
                formattedValue += `) ${numericValue.substring(2, 7)}`;
            }
            if (numericValue.length > 7) {
                formattedValue += `-${numericValue.substring(7, 11)}`;
            }

            setFormData({ ...formData, [field]: formattedValue });
        } else {
            setFormData({ ...formData, [field]: value });
        }

        // Limpa o erro do campo quando ele é modificado
        setErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
    };

    const validate = () => {
        const newErrors = {};
        Object.entries(formData).forEach(([key, value]) => {
            if (!value.trim()) newErrors[key] = 'Preencha esse campo obrigatório.';
        });
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Dados enviados:', formData);
        }
    };

    return (
        <section className="flex flex-col lg:flex-row items-start justify-center px-4 py-16 gap-10 bg-[#f5f8fc]">
            {/* Texto à esquerda */}
            <div
                ref={ref}
                className={`flex-1 transition-opacity duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transform`}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                    Fale com nossa especialista e receba a assessoria técnica contábil que você precisa para sua empresa:
                </h2>
                <ul className="list-disc pl-5 text-[#001c48] text-lg space-y-2">
                    <li>Descubra o melhor regime tributário para você;</li>
                    <li>Aprenda a calcular seus impostos;</li>
                    <li>Entenda todas as suas obrigações fiscais;</li>
                    <li>Saiba como manter seu fluxo financeiro correto.</li>
                </ul>
            </div>

            {/* Formulário à direita */}
            <form
                onSubmit={handleSubmit}
                className="flex-1 w-full max-w-lg bg-white p-6 rounded-xl border border-blue-200 shadow-md space-y-4"
            >
                <h3 className="text-lg font-semibold text-[#001c48] mb-4">
                    Preencha seus dados para que um especialista entre em contato com você.
                </h3>

                {['nome', 'email', 'telefone'].map((field) => (
                    <div key={field}>
                        <input
                            type="text"
                            name={field}
                            placeholder={
                                field === 'nome' ? 'Nome*' :
                                    field === 'email' ? 'E-mail*' :
                                        'Número de telefone (WhatsApp)*'
                            }
                            value={formData[field]}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-md border text-sm bg-blue-50 outline-none ${errors[field] ? 'border-red-500' : 'border-transparent'
                                }`}
                        />
                        {errors[field] && (
                            <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                        )}
                    </div>
                ))}

                {[{
                    name: 'cnpj',
                    label: 'Você tem CNPJ?*'
                }].map(({ name, label }) => (
                    <div key={name}>
                        <select
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-md border text-sm bg-blue-50 outline-none appearance-none ${errors[name] ? 'border-red-500' : 'border-transparent'
                                }`}
                        >
                            <option disabled="" value="">{label}</option>
                            <option value="Sim">Sim</option>
                            <option value="Nao">Não</option>
                        </select>

                        {errors[name] && (
                            <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
                        )}
                    </div>
                ))}

                {[{
                    name: 'duvida',
                    label: 'Qual o tema de sua dúvida?*'
                }].map(({ name, label }) => (
                    <div key={name}>
                        <select
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-md border text-sm bg-blue-50 outline-none appearance-none ${errors[name] ? 'border-red-500' : 'border-transparent'
                                }`}
                        >
                            <option disabled="" value="">{label}</option>
                            <option value="Impostos e rotinas">Impostos e rotinas</option>
                            <option value="Abertura de empresa ou CNPJ">Abertura de empresa ou CNPJ</option>
                            <option value="Posso ser MEI">Posso ser MEI</option>
                        </select>

                        {errors[name] && (
                            <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
                        )}
                    </div>
                ))}

                {[{
                    name: 'atividade',
                    label: 'Qual atividade você exerce?*'
                }].map(({ name, label }) => (
                    <div key={name}>
                        <select
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-md border text-sm bg-blue-50 outline-none appearance-none ${errors[name] ? 'border-red-500' : 'border-transparent'
                                }`}
                        >
                            <option disabled="" value="">{label}</option>
                            <option value="pj_em_uma_empresa">PJ em uma empresa</option>
                            <option value="servicos_de_ti">Serviços de TI</option>
                            <option value="servicos_administrativos">Serviços Administrativos</option>
                            <option value="comercio">Comércio</option><option value="medicina">Medicina</option>
                            <option value="psicologia_e_outros_saude">Psicologia e outros saúde</option>
                            <option value="marketing_publicidade">Marketing / Publicidade</option>
                            <option value="engenharia_arquitetura">Engenharia / Arquitetura</option>
                            <option value="educacao_cursos">Educação / Cursos</option>
                            <option value="advocacia">Advocacia</option>
                            <option value="consultoria">Consultoria</option>
                            <option value="representacao_comercial">Representação Comercial</option>
                            <option value="outros">Minha atividade não está na lista</option>
                        </select>

                        {errors[name] && (
                            <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
                        )}
                    </div>
                ))}



                <p className="text-xs text-blue-900 mt-4">
                    Ao prosseguir, declaro ciência de que as informações fornecidas pelos especialistas da Simplizei são meramente informativas, visando esclarecer dúvidas gerais. Não devem ser interpretadas como orientação contábil, fiscal ou jurídica personalizada, nem como recomendação para tomada de decisão. Reconheço que decisões contábeis exigem o suporte de um contador habilitado, com análise individualizada da minha situação.
                </p>
                <button
                    type="submit"
                    className="w-full mt-4 p-3 bg-[#001c48] text-white rounded-md hover:bg-[#002a6d] transition-colors"
                >
                    Enviar
                </button>
            </form>
        </section>
    );
};

export default FormSection;
