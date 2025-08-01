import React from 'react';
import '../styles/plansComparations.css';
import PlanComparisonTable from './Planos.tsx';


const plans = [
  {
    title: 'PADRÃO',
    subtitle: 'Certificado digital incluido no plano.',
    priceFrom: 'R$ 280',
    price: 'R$ 195 /mês',
    description: 'Você emite suas notas e paga seus impostos em nossa plataforma online.',
    link: 'https://simplizei.com.br/?categoriaPlano=AVANCADO&ramoAtividade=SERVICO',
  },
  {
    title: 'MULTIBENEFÍCIOS',
    subtitle: 'Benefícios para sua saúde e bem-estar.',
    priceFrom: 'R$ 320',
    price: 'R$ 225 /mês',
    description: 'Pacote de benefícios exclusivos no plano.',
    link: 'https://simplizei.com.br/?categoriaPlano=MULTIBENEFICIOS&ramoAtividade=SERVICO',
  },
  {
    title: 'EXPERTS ESSENCIAL',
    subtitle: 'Assessor e analista dedicados.',
    priceFrom: 'R$ 515',
    price: 'R$ 369 /mês',
    description: 'Ideal para quem precisa de apoio nas rotinas de contabilidade.',
    link: 'https://simplizei.com.br/?categoriaPlano=EXPERT_ESSENCIAL&ramoAtividade=SERVICO',
  },
];

const Plans: React.FC = () => {
  return (
    <section className="plans-container">
      <h2>Conheça nossos planos</h2>
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <div
            className={`plan-card ${index === 0 ? 'padrao' : index === 1 ? 'multibeneficios' : 'experts'}`}
            key={index}
          >
            {index === 1 && <div className="plan-badge">Melhor Custo-Benefício</div>}
            {index === 2 && <div className="plan-badge">Atendimento Dedicado</div>}
            <h3>{plan.title}</h3>
            <p className="subtitle">{plan.subtitle}</p>
            <p className="price-from">a partir de <span>{plan.priceFrom}</span></p>
            <p className="price">{plan.price}</p>
            <p className="description">{plan.description}</p>
            <a href={plan.link} target="_blank" rel="noopener noreferrer" className="btn">
              Contratar
            </a>
          </div>
        ))}
      </div>
      <PlanComparisonTable />
    </section>
  );
};

export default Plans;
