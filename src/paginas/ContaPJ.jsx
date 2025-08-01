import Header from '../components/Header';
import Footer from '../components/Footer';

import BenefitsBanner from '../components/BannerColumns';

import FAQSection from '../components/FAQSection.jsx';
import BannerTextsImageRounded from '../components/BannerTextsImageRounded.jsx';
import CTA from '../components/CTA.jsx';
import CarrouselSolucoes from '../components/SolucaoPensada.jsx';
import TimelineSection from '../components/AbraContaPJ';
import CallToActionSection from '../components/BannerButtons';
import SecuritySection from '../components/TextImage';
import PJInfoSection from '../components/CardPicture';
import ContactModal from '../components/ContactModalSite';


const ContaPJ = () => {
    const buttonsBanner = [
        { text: 'Começar agora', class: 'bg-cyan-400', classHover: 'hover:bg-blue-600', onClick() { window.open(`/abrir-empresa`, '_self') } },
    ];
    var bannerTexts = [
        {
            title: "Cobrança online",
            description: "Receba dos clientes de forma online sem precisar ter maquininha ou site.",
            image: "/assets/icons/10185922.png"
        },
        {
            title: "Solução simples e intuitiva",
            description: "Em poucos cliques você cria e envia sua cobrança de maneira rápida e segura.",
            image: "/assets/icons/3374620.png"
        },
        {
            title: "Cobrança via cartão de crédito",
            description: "Gere cobranças em uma única parcela ou várias.",
            image: "/assets/icons/3333376.png"
        }
    ];

    var faqs = [
        {
            question: "O que é conta PJ?",
            answer: "É uma conta aberta em um banco e que atende empresas (pessoas jurídicas) tendo como identidade um CNPJ e não um CPF, como acontece nas contas bancárias para pessoas físicas. Com a conta bancária PJ, você separa suas finanças pessoais das corporativas e ainda tem acesso a outros serviços e benefícios que servirão para gerir as finanças do seu negócio."
        },
        {
            question: "Quais são as vantagens da conta bancária PJ do Simplizei.bank?",
            answer: `São várias as vantagens! A principal delas é a praticidade da integração da rotina financeira com a contabilidade da sua empresa, a exemplo o processamento automático da guia de impostos, funcionando como se fosse um débito automático. Isto evita que você precise perder tempo com esta rotina. 
Outra grande vantagem é a integração automática das suas informações financeiras com a nossa plataforma de gestão contábil, além do Pix gratuito e ilimitado.
Além disso, você também tem a facilidade de poder debitar sua mensalidade da Simplizei automaticamente na sua conta sem você precisar se  preocupar com taxas extras ou custos adicionais para realizar pagamentos automáticos.`
        },
        {
            question: "Preciso ser cliente da Simplizei para abrir uma conta no Simplizei.bank?",
            answer: "Sim. A conta bancária PJ do Simplizei.bank é um benefício oferecido exclusivamente para os nossos clientes."
        },
        {
            question: "Preciso pagar para abrir uma conta bancária PJ no Simplizei.bank?",
            answer: "Não. A abertura da sua conta PJ no Simplizei.bank é totalmente gratuita."
        },
        {
            question: "Como faço para abrir uma conta bancária PJ no Simplizei.bank?",
            answer: "Abrir sua conta é muito fácil! Basta baixar o aplicativo do Simplizei.bank, tirar uma foto do seu rosto e enviar uma foto de um documento pessoal, como por exemplo RG, CNH, passaporte ou algum documento de classe, através do aplicativo."
        },
        {
            question: "O Simplizei.bank cobra alguma taxa para envio de Pix?",
            answer: "Não. No Simplizei.bank você pode enviar Pix ilimitados e sem cobrança de taxas."
        },
        {
            question: "Tenho que pagar alguma tarifa de manutenção mensal no Simplizei.bank?",
            answer: "Não. Tanto a abertura da conta como a sua manutenção mensal são gratuitas no Simplizei.bank."
        },
        {
            question: "O que está incluso no pacote de benefícios da conta bancária PJ do Simplizei.bank?",
            answer: (
                <div>
                    Confira o que faz parte do pacote*:<br/><br/>

                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li>• Mensalidade zero;</li>
                        <li>• Cartão, físico e digital, bandeira Visa com zero anuidade;</li>
                        <li>• Pix ilimitados e gratuitos;</li>
                        <li>• 10 TED gratuitos;</li>
                        <li>• Taxa zero por emissão de boletos;</li>
                        <li>• 10 boletos compensados gratuitos;</li>
                        <li>• Saques na rede Banco24Horas R$6,50 por saque na rede Banco24horas ou Saque e Pague.</li>
                    </ul>
                    <p style={{fontSize: '12px'}}>* Haverá a cobrança de R$3,49 por TED a partir do 11º bem como a cobrança de R$2,49 por boleto compensado acima do 10º.</p>
                </div>
            )
        },
        {
            question: "Como é realizada a integração do meu extrato bancário do Simplizei.bank e a minha contabilidade Simplizei?",
            answer: `Todos os seus gastos com o cartão PJ do Simplizei.bank e as transações realizadas como TED e Pix constarão no extrato da sua conta.
Com a integração automática com a contabilidade da sua empresa, você não precisará se preocupar em apresentar seus extratos bancários da conta PJ manualmente mês a mês para a realização das suas rotinas contábeis.`
        },
        {
            question: "Qual é o código do Simplizei.bank?",
            answer: `Nossa processadora parceira é a DOCK IP, por isso o código de banco das contas é o 301.
Você também pode consultar essa e outras informações sobre sua conta no aplicativo Simplizei.bank acessando “Minha conta" e depois “Ver dados bancários".`
        },
        {
            question: "Qual é o canal de atendimento do Simplizei.bank?",
            answer: "Temos uma equipe à disposição para tirar suas dúvidas através do WhatsApp (41) 4101-0021. Nosso horário de atendimento é das 9h às 19h, de segunda a sexta, exceto feriados nacionais."
        },
    ];
    
    return (
        <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
            <Header />
            <main>
                <BannerTextsImageRounded
                    title="Cobre seu Cliente com link de pagamentos da Simplizei"
                    buttons={buttonsBanner}
                    backgroundImage="/assets/img/homem_mulher1.png"
                    backgroundColor="bg-gradient-to-r from-blue-800 to-black"
                    textColor="text-white"
                />
                <BenefitsBanner
                    textos={bannerTexts}
                />
                <CarrouselSolucoes />
                <TimelineSection />
                <CallToActionSection />
                {/* <CardsStaticButtons /> */}
                <SecuritySection />
                <PJInfoSection />
                <FAQSection
                    questions={faqs}
                />
                <CTA
                    title="Ficou com alguma dúvida?"
                    subTitle='Nosso time de especialistas está pronto para atender você e tirar todas as suas dúvidas sobre os nossos serviços e soluções.'
                />
                <ContactModal />
            </main>
            <Footer />
        </div>
    );
}

export default ContaPJ;

