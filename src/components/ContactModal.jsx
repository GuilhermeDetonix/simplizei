import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    activity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fade-in">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 overflow-hidden">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.894 2.56066C16.4798 1.97487 16.4798 1.02513 15.894 0.43934C15.3082 -0.146447 14.3585 -0.146447 13.7727 0.43934L8.16667 6.04538L2.56066 0.43934C1.97487 -0.146447 1.02513 -0.146447 0.43934 0.43934C-0.146447 1.02513 -0.146447 1.97487 0.43934 2.56066L6.04538 8.16667L0.43934 13.7727C-0.146447 14.3585 -0.146447 15.3082 0.43934 15.894C1.02513 16.4798 1.97487 16.4798 2.56066 15.894L8.16667 10.288L13.7727 15.894C14.3585 16.4798 15.3082 16.4798 15.894 15.894C16.4798 15.3082 16.4798 14.3585 15.894 13.7727L10.288 8.16667L15.894 2.56066Z" fill="#000000" fillOpacity="0.3" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-8 bg-blue-50">
            <div className="h-1 w-16 bg-blue-300 mb-6"></div>
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Ficou com alguma dúvida?</h2>
            <p className="text-gray-700 mb-8">Preencha as informações ao lado que em breve entraremos em contato com você.</p>
            <img src="https://placehold.co/300x262" alt="Imagem ilustrativa" className="w-full max-w-xs mx-auto" />
          </div>

          <div className="w-full lg:w-1/2 p-8">
            <div className="text-center lg:hidden mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Vamos conversar?</h2>
              <p className="text-gray-600">Se ficou alguma dúvida, preencha seus dados abaixo. Vamos entrar em contato.</p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Nome</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome completo"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Celular</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(DDD) 00000-0000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Qual é o seu e-mail?</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu_email@mail.com.br"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Em qual cidade sua empresa está situada?</label>
                <select 
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled selected>Ex: São Paulo</option>
                  <option>São Paulo</option>
                  <option>Rio de Janeiro</option>
                  <option>Belo Horizonte</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Descrição da atividade que você exercerá na empresa</label>
                <input 
                  type="text" 
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  placeholder="Ex.: programador, consultor de marketing"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="pt-4">
                <label className="block text-gray-700 font-bold mb-4">Como prefere que entremos em contato com você?</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="button" className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 transition">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.032 9.632C12.872 9.472 10.408 7.008 10.248 6.848C10.088 6.688 9.928 6.688 9.768 6.688C9.608 6.688 9.368 6.768 9.208 6.928C9.048 7.088 8.648 7.488 8.488 7.648C8.328 7.808 8.168 7.808 8.008 7.648L6.888 6.528C6.568 6.208 6.328 5.968 6.168 5.728C6.008 5.488 6.008 5.248 6.088 5.088L6.968 3.128C7.048 2.888 7.048 2.728 6.968 2.568C6.888 2.408 6.728 2.248 6.568 2.168C6.408 2.088 6.168 2 5.928 2H3.848C3.608 2 3.368 2.08 3.208 2.24C3.048 2.4 2.88 2.64 2.88 2.88C2.88 3.12 3.048 5.488 5.328 7.768C7.608 10.048 9.976 10.216 10.216 10.216C10.456 10.216 10.696 10.048 10.856 9.888C11.016 9.728 11.096 9.488 11.096 9.248V7.168C11.096 6.928 11.008 6.688 10.928 6.528C10.848 6.368 10.768 6.208 10.608 6.128L9.048 5.008C9.048 5.008 9.448 4.608 9.528 4.448C9.608 4.288 9.608 4.048 9.448 3.888C9.288 3.728 9.128 3.568 8.968 3.568C8.808 3.568 8.568 3.488 8.408 3.568C8.248 3.648 5.768 6.128 5.608 6.288C5.448 6.448 5.448 6.608 5.528 6.768C5.608 6.928 5.848 7.168 6.168 7.488L7.288 8.608C7.528 8.848 7.768 8.968 8.008 8.968C8.248 8.968 8.488 8.848 8.728 8.608L10.288 7.048C10.448 6.888 10.608 6.888 10.768 6.888C10.928 6.888 11.088 6.968 11.248 7.128C11.408 7.288 11.488 7.528 11.488 7.768V9.848C11.488 10.088 11.408 10.328 11.248 10.488C11.088 10.648 10.848 10.816 10.608 10.816C10.368 10.816 8.008 10.976 5.728 8.696C3.448 6.416 3.288 4.048 3.288 3.808C3.288 3.568 3.448 3.328 3.608 3.168C3.768 3.008 4.008 2.92 4.248 2.92H6.328C6.568 2.92 6.808 3.088 6.968 3.248C7.128 3.408 7.208 3.648 7.208 3.888L6.328 5.848C6.328 5.848 6.408 6.008 6.408 6.088C6.408 6.168 6.408 6.248 6.488 6.328L7.608 7.448C7.768 7.608 7.768 7.768 7.928 7.928C8.088 8.088 8.248 8.088 8.408 7.928L9.968 6.368C9.968 6.368 10.368 5.968 10.448 5.808C10.528 5.648 10.608 5.488 10.608 5.328C10.608 5.168 10.528 4.928 10.528 4.928C10.528 4.928 13.112 7.512 13.192 7.592C13.432 7.832 13.432 8.312 13.192 8.552L12.072 9.672C11.832 9.912 11.352 9.912 11.112 9.672L9.552 8.112C9.392 7.952 9.312 7.792 9.312 7.632C9.312 7.472 9.392 7.312 9.552 7.152C9.712 6.992 9.872 6.992 10.032 7.152L11.592 8.712C11.832 8.952 12.072 9.032 12.312 9.032C12.552 9.032 12.792 8.952 12.952 8.792L13.032 8.712C13.272 8.472 13.272 7.992 13.032 7.752Z" fill="white" />
                    </svg>
                    Via WhatsApp
                  </button>
                  <button type="button" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 transition">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.6666 10.6666V12C14.6666 12.7072 14.3857 13.3855 13.8856 13.8856C13.3855 14.3857 12.7072 14.6666 12 14.6666C8.3186 14.6666 5.33331 11.6813 5.33331 8C5.33331 7.29275 5.61426 6.61446 6.11436 6.11436C6.61446 5.61426 7.29275 5.33331 8 5.33331H9.33331M9.33331 1.33331H12C12.7072 1.33331 13.3855 1.61426 13.8856 2.11436C14.3857 2.61446 14.6666 3.29275 14.6666 4V6.66665C14.6666 7.37391 14.3857 8.0522 13.8856 8.5523C13.3855 9.05239 12.7072 9.33331 12 9.33331H9.33331C8.62605 9.33331 7.94776 9.05239 7.44766 8.5523C6.94757 8.0522 6.66663 7.37391 6.66663 6.66665V4C6.66663 3.29275 6.94757 2.61446 7.44766 2.11436C7.94776 1.61426 8.62605 1.33331 9.33331 1.33331Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Via Ligação
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;