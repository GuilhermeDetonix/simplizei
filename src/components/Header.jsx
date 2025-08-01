import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    {
      text: 'Serviços',
      href: '#',
      subLinks: [
        {
          title: 'Serviços de contabilidade:',
          links: [
            { text: 'Abrir empresa grátis', href: '/abrir-empresa' },
            { text: 'Deixar de ser MEI', href: '/deixar-de-ser-mei' },
            { text: 'Trocar de contador', href: '/trocar-de-contador' },
            { text: 'Contabilidade completa', href: '/escritorio-contabilidade-online' },
            { text: 'Assessoria Contábil', href: '/consultoria' },
          ],
        },
        {
          title: 'Para sua empresa:',
          links: [
            { text: 'Escritório Virtual', href: '/escritorio-contabilidade-online' },
            { text: 'Emissor de Nota Fiscal', href: '/emissor-nfs' },
            { text: 'Certificado Digital', href: '/certificado-digital' },
            { text: 'Banco PJ', href: '/conta-pj' },
            { text: 'Cobrança de Clientes', href: '/cobre-seu-cliente' },
          ],
        },
      ],
    },
    {
      text: 'Planos',
      href: '#',
      subLinks: [
        {
          title: '',
          links: [
            { text: 'Planos Simplizei', href: '/planos-simplizei' },
          ],
        },
      ],
    },
    {
      text: 'Como funciona',
      href: '#',
      subLinks: [
        {
          title: '',
          links: [
            { text: 'Como funciona a Simplizei', href: '/como-funciona-a-simplizei' },
          ],
        },
      ],
    },
  ];

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" title="Simplizei">
          <img src="./assets/img/logo.svg" alt="Simplizei Logo" className="h-10 sm:h-12" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700 relative">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors duration-200 py-2">
                <a href={link.href} className="hover:text-blue-600">
                  {link.text}
                </a>
                <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
              </div>
              
              {activeDropdown === index && link.subLinks && (
                <div
                  className={`absolute left-0 top-full ${link.subLinks.length === 1 ? 'min-w-[250px] w-auto' : `w-max`} bg-white rounded-md shadow-lg z-50 border border-gray-100 pt-4 px-6`}
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className={`grid grid-cols-${link.subLinks.length} gap-6`}>
                    {link.subLinks.map((column, colIndex) => (
                      <div key={colIndex}>
                        {column.title && (
                          <h4 className="text-sm font-semibold text-gray-500 mb-2">{column.title}</h4>
                        )}
                        {column.links.map((subLink, subIndex) => (
                          <a
                            key={subIndex}
                            href={subLink.href}
                            className="block py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 text-sm rounded-md px-2"
                          >
                            {subLink.text}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Call to Action / Login */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            Login
          </a>
          <a
            href="/cadastrar"
            className="bg-cyan-500 hover:bg-cyan-600 transition-colors duration-200 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Abra sua empresa
          </a>
        </div>

        {/* Mobile Call to Action */}
        <div className="md:hidden">
          <a
            href="/cadastrar"
            className="bg-cyan-500 hover:bg-cyan-600 transition-colors duration-200 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Abra sua empresa
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Abrir menu"
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white">
          <nav className="flex flex-col space-y-2 text-gray-700 text-sm">
            {navLinks.map((link, index) => (
              <div key={index} className="border-b border-gray-100 pb-2">
                <a
                  href={link.href}
                  className="block py-3 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {link.text}
                </a>
                {link.subLinks && (
                  <div className="ml-4 mt-1 flex flex-col space-y-1">
                    {link.subLinks.flatMap((col) =>
                      col.links.map((subLink, subIndex) => (
                        <a
                          key={subIndex}
                          href={subLink.href}
                          className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                        >
                          {subLink.text}
                        </a>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
            <a
              href="/login"
              className="mt-4 text-gray-600 hover:text-blue-600 transition-colors duration-200 block py-2"
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
