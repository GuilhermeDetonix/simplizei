import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: none; }
`;

const PageWrapper = styled.div`
  background: #f8f9fa;
  padding: 60px 20px;
  font-family: 'Segoe UI', sans-serif;
  color: #212529;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 50px;
  animation: ${fadeIn} 0.7s ease-out both;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #0c4a6e;
  margin-bottom: 30px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #0c4a6e;
  border-left: 5px solid #0ea5e9;
  padding-left: 12px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  text-align: justify;
`;

const List = styled.ul`
  list-style: disc;
  margin-left: 20px;
  margin-top: 10px;
  color: #333;
`;

const Strong = styled.span`
  font-weight: 600;
`;

const PoliticaPrivacidade = () => {
  return (
    <PageWrapper>
      <Container>
        <Title>Politica de Privacidade - Simplizei</Title>

        <Section>
          <SectionTitle>1. Apresentação</SectionTitle>
          <Paragraph>
            O presente Termo de Uso regula o acesso e utilização do site <Strong>Simplizei.com.br</Strong>, plataforma digital dedicada a facilitar o acesso a serviços e ferramentas para gestão, organização e automação de processos cotidianos, sejam eles pessoais ou profissionais.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Aceitação</SectionTitle>
          <Paragraph>
            Ao acessar este site, o usuário declara ter lido, compreendido e aceitado todas as cláusulas previstas neste Termo, obrigando-se a cumpri-lo integralmente. Se não concordar com quaisquer termos aqui descritos, deverá abster-se de utilizar os serviços da plataforma.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>3. Serviços Oferecidos</SectionTitle>
          <Paragraph>
            O Simplizei disponibiliza serviços de consultoria digital, automação de tarefas, integração de dados e outras ferramentas com foco em produtividade e eficiência. Os serviços podem ser modificados, ampliados ou descontinuados a critério exclusivo da administração.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>4. Condições de Uso</SectionTitle>
          <List>
            <li>É proibido utilizar o site para fins ilícitos, fraudulentos ou que violem a legislação vigente.</li>
            <li>O usuário compromete-se a fornecer dados verdadeiros e atualizados sempre que solicitado.</li>
            <li>A reprodução, distribuição ou modificação de qualquer conteúdo da plataforma sem autorização prévia é vedada.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. Privacidade e Proteção de Dados</SectionTitle>
          <Paragraph>
            O Simplizei adota práticas rigorosas de proteção de dados, alinhadas à Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018). Coletamos apenas os dados estritamente necessários para a prestação dos nossos serviços e os tratamos com base em fundamentos legais, como o consentimento, execução de contrato e cumprimento de obrigações legais.
          </Paragraph>
          <Paragraph>
            Os dados pessoais armazenados incluem, mas não se limitam a: nome, e-mail, CPF, dados de acesso, informações de navegação e preferências do usuário. Senhas são armazenadas utilizando algoritmos de criptografia de ponta, não sendo possível sua recuperação em texto puro. Todas as informações sensíveis, incluindo dados de identificação pessoal e preferências, também são protegidas por criptografia em repouso e em trânsito.
          </Paragraph>
          <Paragraph>
            O Simplizei garante ao usuário os direitos previstos na LGPD, tais como:
          </Paragraph>
          <List>
            <li>Confirmação da existência de tratamento;</li>
            <li>Acesso aos dados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
            <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
            <li>Eliminação dos dados pessoais tratados com consentimento;</li>
            <li>Informação sobre compartilhamento com entidades públicas e privadas;</li>
            <li>Revogação do consentimento a qualquer momento, mediante requisição expressa.</li>
          </List>
          <Paragraph>
            Para exercer qualquer um desses direitos, o usuário pode entrar em contato com o Encarregado de Proteção de Dados pelo e-mail: <a href="mailto:dpo@simplizei.com.br">dpo@simplizei.com.br</a>.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Propriedade Intelectual</SectionTitle>
          <Paragraph>
            Todo o conteúdo do site, incluindo textos, logotipos, imagens, códigos e funcionalidades, são de propriedade exclusiva do Simplizei e protegidos pelas normas de direitos autorais e propriedade intelectual. Qualquer uso indevido será objeto de responsabilização civil e penal.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Modificações no Termo</SectionTitle>
          <Paragraph>
            O Simplizei reserva-se o direito de alterar este Termo a qualquer momento, mediante aviso no próprio site. Recomenda-se a leitura periódica para manter-se informado sobre as condições vigentes.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>8. Foro Competente</SectionTitle>
          <Paragraph>
            Este Termo será interpretado conforme a legislação brasileira, sendo eleito o foro da Comarca de São Paulo/SP para dirimir eventuais litígios.
          </Paragraph>
        </Section>

        <Paragraph style={{ fontSize: '0.9rem', color: '#666' }}>
          Última atualização: 24 de julho de 2025
        </Paragraph>
      </Container>
    </PageWrapper>
  );
};

export default PoliticaPrivacidade;
