import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import Header from '../components/Header';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [recaptchaToken, setRecaptchaToken] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!recaptchaToken) {
      setError('Por favor, complete o reCAPTCHA');
      return;
    }

    try {
      setLoading(true);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 minutes

      fetch(import.meta.env.VITE_URL_API_DB + 'login',
        {
          signal: controller.signal,
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + import.meta.env.VITE_URL_API_KEY // Se aplicável
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          clearTimeout(timeoutId);
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          if (data.error) throw new Error(data.error);
          if (parseInt(data.status) === 1 && data.token && data.url && data.token.length > 0) {
            localStorage.setItem('jwt_token', data.token);
            window.location.href = data.url || '/login';
          } else {
            toast.error(data.message || 'Erro ao enviar formulário');
          }
        })
        .catch(error => {
          if (error.name === 'AbortError') {
            toast.error('Requisição cancelada devido ao tempo de espera expirar');
          } else {
            toast.error('Fetch error:', error);
          }
        });


    } catch (err) {
      setError(err.message || 'Ocorreu um erro durante o login');
      recaptchaRef.current.reset();
      setRecaptchaToken('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        {/* Seu conteúdo */}
        <Toaster position="top-right" />
      </div>
      <Header />
      <section className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
        {/* Coluna da Imagem */}
        <div className="hidden lg:flex lg:w-1/2 justify-center bg-white">
          <img
            src="/assets/img/bemvindo.jpg"
            alt="Banner de Login"
            className="max-w-full h-auto object-cover"
          />
        </div>

        {/* Coluna do Formulário */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 animate-fade-in-down">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Faça seu login</h2>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete='off'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="6"
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Lembrar de mim
                  </label>
                </div>

                <div className="text-sm">
                  <a href="/recuperar-senha" className="font-medium text-blue-600 hover:text-blue-500">
                    Esqueceu sua senha?
                  </a>
                </div>
              </div> */}

              {/* reCAPTCHA */}
              <div className="g-recaptcha" data-sitekey="SUA_CHAVE_RECAPTCHA_AQUI"></div>

              {/* Ou usando react-google-recaptcha se preferir */}
              {/* <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="SUA_CHAVE_RECAPTCHA_AQUI"
                onChange={handleRecaptchaChange}
              /> */}

              <button
                type="submit"
                disabled={loading || !recaptchaToken}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${(loading || !recaptchaToken) ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processando...
                  </>
                ) : 'Entrar'}
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Ainda não tem conta?
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="/cadastrar"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Criar nova conta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;