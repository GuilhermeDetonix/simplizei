// ChangePassword.jsx
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const ChangePassword = ({ isOpen, onClose }) => {
    const { userId } = useParams();
    const [showPassword, setShowPassword] = useState(false);
    const [passwordData, setPasswordData] = useState({
        newPassword: '',
    });

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();

        if (passwordData.newPassword.length < 6) {
            toast.info('A senha deve ter pelo menos 6 caracteres!');
            return;
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 minutes

            fetch(import.meta.env.VITE_URL_API_DB + 'alterar-senha/' + userId,
                {
                    signal: controller.signal,
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + import.meta.env.VITE_URL_API_KEY // Se aplicável
                    },
                    body: JSON.stringify(passwordData)
                })
                .then(response => {
                    clearTimeout(timeoutId);
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.json();
                })
                .then(data => {
                    if (data.error) throw new Error(data.error);
                    if (parseInt(data.status) === 1) {
                        toast.success('Senha alterada com sucesso!');
                        onClose();
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
        } catch (error) {
            toast.error('Erro ao alterar senha: ' + error.message);
        }

    };

    return (
        <Transition appear show={isOpen} as={React.Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div>
                        {/* Seu conteúdo */}
                        <Toaster position="top-right" />
                    </div>
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Alterar Senha
                                </Dialog.Title>

                                <form onSubmit={handlePasswordSubmit} className="mt-4 space-y-4">
                                    <div>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="newPassword"
                                            autoComplete='off'
                                            placeholder='Nova senha'
                                            id="newPassword"
                                            className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                            onChange={handlePasswordChange}
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(prevState => !prevState)}
                                            className="absolute right-[30px] top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
                                        >
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </button>
                                    </div>

                                    <div className="mt-4 flex justify-end space-x-3">
                                        <button
                                            type="button"
                                            onClick={onClose}  // CORREÇÃO APLICADA AQUI
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                                        >
                                            Salvar Nova Senha
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ChangePassword;