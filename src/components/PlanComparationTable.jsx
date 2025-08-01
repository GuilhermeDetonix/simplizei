import React, { useState } from 'react';
import styled from 'styled-components';

const PlanComparison = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeTab, setActiveTab] = useState('service');

  const plans = {
    service: [
      {
        id: 'standard',
        name: 'PADRÃO',
        price: 'R$195/mês',
        originalPrice: 'a partir de R$280',
        description: 'Você emite suas notas e paga seus impostos em nossa plataforma online.',
        features: {
          digitalCertificate: true,
          onlinePlatform: true,
          freeOpening: false,
          freeDigitalCertificate: false,
          benefitsPackage: false,
          dedicatedAdvisor: false
        }
      },
      {
        id: 'multibenefits',
        name: 'MULTIBENEFÍCIOS',
        price: 'R$225/mês',
        originalPrice: 'a partir de R$300',
        description: 'Decide de beneficios exclusivos no plano.',
        features: {
          digitalCertificate: true,
          onlinePlatform: true,
          freeOpening: false,
          freeDigitalCertificate: false,
          benefitsPackage: true,
          dedicatedAdvisor: false
        }
      },
      {
        id: 'essential',
        name: 'AFLORIDO DO CORO DO EXPERTS ESSENCIAL',
        price: 'R$359/mês',
        originalPrice: 'a partir de R$545',
        description: 'Ideal para quem precisa de apoio nas rotinas de contabilidade.',
        features: {
          digitalCertificate: true,
          onlinePlatform: true,
          freeOpening: true,
          freeDigitalCertificate: true,
          benefitsPackage: true,
          dedicatedAdvisor: true
        }
      }
    ],
    commerce: [
      // Similar structure for commerce plans
    ]
  };

  const features = [
    {
      id: 'digitalCertificate',
      name: 'Certificado digital',
      description: 'Certificado digital incluso no plano'
    },
    {
      id: 'onlinePlatform',
      name: 'Plataforma online',
      description: 'Emissão de notas e pagamento de impostos online'
    },
    {
      id: 'freeOpening',
      name: 'Processo de abertura grátis',
      description: 'Abertura de empresa sem custos adicionais'
    },
    {
      id: 'freeDigitalCertificate',
      name: 'Certificado digital gratuito',
      description: 'Certificado digital oferecido sem custo adicional'
    },
    {
      id: 'benefitsPackage',
      name: 'Pacote de benefícios',
      description: 'Academia, consultas com psicólogo e nutricionista'
    },
    {
      id: 'dedicatedAdvisor',
      name: 'Assessor dedicado',
      description: 'Profissional dedicado para suporte contábil'
    }
  ];

  const serviceTypes = [
    { id: 'service', name: 'Empresas de serviço' },
    { id: 'commerce', name: 'Empresas de comércio' }
  ];

  return (
    <ComparisonContainer>
      <Header>
        <h1>Conheça nossos planos</h1>
        <p>Escolha o plano ideal para o seu negócio</p>
        
        <ServiceTypeTabs>
          {serviceTypes.map(type => (
            <ServiceTypeTab 
              key={type.id}
              active={activeTab === type.id ? true : false}
              onClick={() => setActiveTab(type.id)}
            >
              {type.name}
            </ServiceTypeTab>
          ))}
        </ServiceTypeTabs>
      </Header>

      <PlansContainer>
        {plans[activeTab].map(plan => (
          <PlanCard 
            key={plan.id}
            selected={selectedPlan === plan.id}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <PlanHeader>
              <PlanName>{plan.name}</PlanName>
              <PlanOriginalPrice>{plan.originalPrice}</PlanOriginalPrice>
              <PlanPrice>{plan.price}</PlanPrice>
              <PlanDescription>{plan.description}</PlanDescription>
            </PlanHeader>
            
            <PlanFeatures>
              {features.map(feature => (
                <FeatureItem key={feature.id}>
                  <FeatureName>{feature.name}</FeatureName>
                  <FeatureIndicator available={plan.features[feature.id]}>
                    {plan.features[feature.id] ? '✓' : '✗'}
                  </FeatureIndicator>
                </FeatureItem>
              ))}
            </PlanFeatures>
            
            <ContractButton>Contratar</ContractButton>
            {plan.id === 'standard' && (
              <AdditionalInfo>Apenas R$ 30/mês adicionais</AdditionalInfo>
            )}
          </PlanCard>
        ))}
      </PlansContainer>

      <FeaturesDetails>
        <SectionTitle>Contabilidade</SectionTitle>
        <FeatureList>
          <li>Contabilidade completa</li>
          <SubFeature>Processo de abertura grátis</SubFeature>
          <SubFeature>Certificado digital gratuito</SubFeature>
        </FeatureList>

        <SectionTitle>Benefícios</SectionTitle>
        <FeatureList>
          <li>Pacote de benefícios: academia, consultas com psicólogo e nutricionista</li>
          <SubFeature>Atendimento via chat</SubFeature>
          <SubFeature>Atendimento via e-mail das 9h às 17h30</SubFeature>
          <SubFeature>Atendimento via WhatsApp das 9h às 22h</SubFeature>
          <SubFeature>Atendimento via telefone das 9h às 18h</SubFeature>
          <SubFeature>Atendimento via assessor dedicado</SubFeature>
          <SubFeature>Reunião online com orientações para início da sua contabilidade</SubFeature>
        </FeatureList>

        <SectionTitle>Notas fiscais</SectionTitle>
        <FeatureList>
          <li>Emita quantas NF-e você quiser pelo emissor da plataforma</li>
          <SubFeature>Emissão de notas fiscais pela equipe Contabilize!</SubFeature>
        </FeatureList>
      </FeaturesDetails>
    </ComparisonContainer>
  );
};

// Styled Components
const ComparisonContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1.2rem;
    color: #7f8c8d;
  }
`;

const ServiceTypeTabs = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const ServiceTypeTab = styled.button`
  padding: 0.8rem 2rem;
  margin: 0 0.5rem;
  border: none;
  background: ${props => props.active ? '#3498db' : '#ecf0f1'};
  color: ${props => props.active ? 'white' : '#2c3e50'};
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#2980b9' : '#dfe6e9'};
  }
`;

const PlansContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PlanCard = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid ${props => props.selected ? '#3498db' : 'transparent'};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const PlanHeader = styled.div`
  padding: 1.5rem;
  background: #f8f9fa;
  text-align: center;
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const PlanOriginalPrice = styled.p`
  text-decoration: line-through;
  color: #95a5a6;
  font-size: 0.9rem;
`;

const PlanPrice = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #3498db;
  margin: 0.5rem 0;
`;

const PlanDescription = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
`;

const PlanFeatures = styled.ul`
  padding: 1.5rem;
  border-bottom: 1px solid #ecf0f1;
`;

const FeatureItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #f1f1f1;
`;

const FeatureName = styled.span`
  color: #2c3e50;
  font-size: 0.95rem;
`;

const FeatureIndicator = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.available ? '#2ecc71' : '#e74c3c'};
  color: white;
  text-align: center;
  line-height: 24px;
  font-size: 0.8rem;
`;

const ContractButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #3498db;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #2980b9;
  }
`;

const AdditionalInfo = styled.p`
  text-align: center;
  padding: 0.5rem;
  font-size: 0.8rem;
  color: #7f8c8d;
  background: #f8f9fa;
`;

const FeaturesDetails = styled.div`
  margin-top: 3rem;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  margin-bottom: 2rem;
  padding-left: 1rem;
  
  li {
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-weight: 500;
  }
`;

const SubFeature = styled.li`
  margin-left: 1rem;
  color: #7f8c8d !important;
  font-weight: normal !important;
  position: relative;
  
  &::before {
    content: '•';
    margin-right: 0.5rem;
    color: #3498db;
  }
`;

export default PlanComparison;