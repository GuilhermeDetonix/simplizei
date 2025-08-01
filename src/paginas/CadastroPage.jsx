// CadastroPage.jsx
import { useState } from 'react';
import '../styles/CadastroPage.css';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import { 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

const CadastroPage = () => {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        cpf: '',
        senha: '',
        confirmarSenha: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // Limpa erros quando o usuário digita
        if (errors[e.target.name]) {
            setErrors({...errors, [e.target.name]: ''});
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!form.nome.trim()) newErrors.nome = 'Nome é obrigatório';
        if (!form.email.trim()) {
            newErrors.email = 'E-mail é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'E-mail inválido';
        }
        if (!form.cpf.trim()) {
            newErrors.cpf = 'CPF é obrigatório';
        } else if (!/^\d{11}$/.test(form.cpf)) {
            newErrors.cpf = 'CPF inválido (11 dígitos)';
        }
        if (!form.senha) {
            newErrors.senha = 'Senha é obrigatória';
        } else if (form.senha.length < 6) {
            newErrors.senha = 'Senha deve ter pelo menos 6 caracteres';
        }
        if (form.senha !== form.confirmarSenha) {
            newErrors.confirmarSenha = 'Senhas não coincidem';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setLoading(true);
        
        try {
            // Cria usuário no Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                form.email, 
                form.senha
            );
            
            // Aqui você pode enviar os dados adicionais (nome, CPF) para seu backend
            console.log('Usuário criado:', userCredential.user);
            
            // Redireciona após cadastro bem-sucedido
            navigate('/dashboard');
        } catch (error) {
            console.error('Erro no cadastro:', error);
            if (error.code === 'auth/email-already-in-use') {
                setErrors({...errors, email: 'Este e-mail já está cadastrado'});
            } else if (error.code === 'auth/weak-password') {
                setErrors({...errors, senha: 'Senha muito fraca'});
            } else if (error.code === 'auth/invalid-email') {
                setErrors({...errors, email: 'E-mail inválido'});
            } else {
                alert('Erro ao cadastrar: ' + error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            
            // O usuário conectado
            const user = result.user;
            console.log('Usuário Google:', user);
            
            // Redireciona após login bem-sucedido
            navigate('/dashboard');
        } catch (error) {
            console.error('Erro no login com Google:', error);
            alert('Erro ao fazer login com Google: ' + error.message);
        }
    };

    return (
        <>
            <Header />
            <div className="cadastro-container">
                <div className="form-box">
                    <h2>Criar sua conta</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="nome" 
                                placeholder="Nome completo" 
                                value={form.nome}
                                onChange={handleChange}
                                className={errors.nome ? 'error' : ''}
                            />
                            {errors.nome && <span className="error-message">{errors.nome}</span>}
                        </div>
                        
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="E-mail" 
                                value={form.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="cpf" 
                                placeholder="CPF (apenas números)" 
                                value={form.cpf}
                                onChange={handleChange}
                                className={errors.cpf ? 'error' : ''}
                                maxLength="11"
                            />
                            {errors.cpf && <span className="error-message">{errors.cpf}</span>}
                        </div>
                        
                        <div className="form-group">
                            <input 
                                type="password" 
                                name="senha" 
                                placeholder="Senha (mínimo 6 caracteres)" 
                                value={form.senha}
                                onChange={handleChange}
                                className={errors.senha ? 'error' : ''}
                            />
                            {errors.senha && <span className="error-message">{errors.senha}</span>}
                        </div>
                        
                        <div className="form-group">
                            <input 
                                type="password" 
                                name="confirmarSenha" 
                                placeholder="Confirmar senha" 
                                value={form.confirmarSenha}
                                onChange={handleChange}
                                className={errors.confirmarSenha ? 'error' : ''}
                            />
                            {errors.confirmarSenha && <span className="error-message">{errors.confirmarSenha}</span>}
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="submit-btn"
                        >
                            {loading ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                    </form>
                    
                    <div className="divider">
                        <span>ou</span>
                    </div>
                    
                    <button
                        onClick={signInWithGoogle}
                        className="google-btn"
                        disabled={loading}
                    >
                        <img
                            src="/assets/img/google.jpeg"
                            alt="Google logo"
                            width="20"
                        />
                        Cadastre-se com Google
                    </button>
                    
                    <p className="login-link">
                        Já tem conta? <a href="/login">Entrar</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default CadastroPage;