import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaShieldAlt, FaAward, FaRegHandshake } from 'react-icons/fa';

const Footer = () => {
  const companyLinks = [
    { text: "Sobre nós", href: "/quem-somos" },
    { text: "Contador Online", href: "/contador-online" },
    { text: "Depoimento de clientes", href: "/depoimentos-de-clientes" },
    { text: "Trabalhe conosco", href: "/trabalhe-na-simplizei" },
  ];

  const accountingLinks = [
    { text: "Abrir empresa online", href: "/abrir-empresa" },
    { text: "Trocar de contador", href: "/trocar-de-contador" },
    { text: "Como funciona?", href: "/como-funciona-a-simplizei" },
    { text: "Planos e preços", href: "/planos-simplizei" },
  ];

  const resourcesLinks = [
    { text: "Política de privacidade", href: "/politica-de-privacidade" },
    { text: "Termos de uso", href: "/termos-de-uso" },
  ];

  const certifications = [
    { icon: <FaShieldAlt className="text-blue-600 text-2xl" />, text: "Dados protegidos", subtext: "LGPD" },
    { icon: <FaAward className="text-blue-600 text-2xl" />, text: "Melhor avaliação", subtext: "Reclame Aqui" },
    { icon: <FaRegHandshake className="text-blue-600 text-2xl" />, text: "Great Place to Work", subtext: "2023-2024" }
  ];

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-blue-700">
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
              src="/assets/img/logow.svg" 
              alt="Simplizei Logo" 
              className="h-10 inline-block mr-4"
            />
            <p className="text-blue-100 leading-relaxed inline-block">
              <strong className="font-semibold text-cyan-400">Simplificando</strong> a vida de quem empreende no Brasil e <strong className="font-semibold text-cyan-400">potencializando</strong> histórias de sucesso.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/simplizei" className="text-blue-200 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/company/simplizei" className="text-blue-200 hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://www.facebook.com/simplizei" className="text-blue-200 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://www.youtube.com/@simplizei" className="text-blue-200 hover:text-white transition-colors">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-4 h-0.5 bg-white mr-3"></span>
              A Empresa
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={`company-${index}`}>
                  <a 
                    href={link.href} 
                    className="text-blue-200 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-4 h-0.5 bg-white mr-3"></span>
              Contabilidade
            </h4>
            <ul className="space-y-3">
              {accountingLinks.map((link, index) => (
                <li key={`accounting-${index}`}>
                  <a 
                    href={link.href} 
                    className="text-blue-200 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-4 h-0.5 bg-white mr-3"></span>
              Recursos
            </h4>
            <ul className="space-y-3">
              {resourcesLinks.map((link, index) => (
                <li key={`resources-${index}`}>
                  <a 
                    href={link.href} 
                    className="text-blue-200 hover:text-white transition-colors flex items-center"
                    target={link.target || "_self"}
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        {/* <div className="py-12 border-b border-blue-700">
          <h4 className="text-white font-bold text-lg mb-8 text-center">
            Certificações e Reconhecimentos
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={`cert-${index}`} 
                className="bg-blue-800 rounded-lg p-6 flex flex-col items-center text-center hover:bg-blue-700 transition-colors"
              >
                <div className="mb-4">
                  {cert.icon}
                </div>
                <h5 className="text-white font-semibold mb-1">{cert.text}</h5>
                <p className="text-blue-300 text-sm">{cert.subtext}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Contact Info */}
        <div className="py-12 border-b border-blue-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-white mr-3" />
                <h5 className="text-white font-semibold">São Paulo</h5>
              </div>
              <p className="text-blue-200">
                R. Alexandre Herculano, <br />
                197 CJ 1210 - Gonzaga,<br />
                Santos - SP, 11050-031
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-white mr-3" />
                <h5 className="text-white font-semibold">Contato</h5>
              </div>
              <p className="text-blue-200 mb-2">
                <a href="mailto:ouvidoria@simplizei.com.br" className="hover:text-white transition-colors">
                  <FaEnvelope className="inline mr-2" />
                  ouvidoria@simplizei.com.br
                </a>
              </p>
              {/* <p className="text-blue-200">
                Responsável Técnico:<br />
                CRC PR-045113/O-7
              </p> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Simplizei. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="/termo-de-uso" target='_blank' className="text-blue-300 hover:text-white transition-colors text-sm">
              Termos de uso
            </a>
            <a href="/politica-de-privacidade" target='_blank' className="text-blue-300 hover:text-white transition-colors text-sm">
              Política de privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;