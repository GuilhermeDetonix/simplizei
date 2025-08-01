import React from 'react';
import '../styles/planos.css';

const PlanComparisonTable: React.FC = () => {
  const headers = ['Recursos', 'Padrão', 'Multibenefícios', 'Experts Essencial'];

  const data = [
    {
      category: 'Contabilidade',
      items: [
        ['Contabilidade completa', true, true, true],
        ['Processo de abertura grátis', true, true, true],
        ['Certificado digital gratuito', true, true, true],
      ],
    },
    {
      category: 'Benefícios',
      items: [
        ['Pacote de benefícios: academia, psicólogo e nutricionista', false, true, 'R$ 30/mês adicionais'],
      ],
    },
    {
      category: 'Atendimento',
      items: [
        ['Chat e e-mail (9h às 17h30)', true, true, true],
        ['WhatsApp (9h às 22h)', true, true, true],
        ['Telefone (9h às 18h)', false, false, true],
        ['Assessor dedicado', false, false, true],
      ],
    },
    {
      category: 'Notas Fiscais',
      items: [
        ['Emissão ilimitada pela plataforma', true, true, true],
        ['Emissão pela equipe Simplizei', false, false, 'Até 35 NFs/mês'],
      ],
    },
    {
      category: 'Serviços financeiros',
      items: [
        ['Conta PJ gratuita', true, true, true],
        ['Débito automático de impostos', false, true, true],
        ['Importação de extrato bancário', false, false, 'Até 2 contas'],
      ],
    },
    {
      category: 'Soluções adicionais',
      items: [
        ['Pró-labore de sócios', 'Até 2 sócios', 'Até 2 sócios', 'Até 3 sócios'],
        ['Folha de pagamento', 'Cobrado à parte', 'Cobrado à parte', 'Até 3 funcionários grátis'],
        ['Faturamento mensal ideal', 'Até R$ 50 mil', 'Até R$ 50 mil', 'Até R$ 200 mil'],
      ],
    },
  ];

  return (
    <div className="comparison-wrapper">
      <h3>Compare os planos</h3>
      <table className="comparison-table">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((section, idx) => (
            <React.Fragment key={idx}>
              <tr className="category-row">
                <td colSpan={4}>{section.category}</td>
              </tr>
              {section.items.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>
                      {cell === true ? '✔️' : cell === false ? '❌' : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanComparisonTable;
