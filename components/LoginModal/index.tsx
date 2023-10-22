import React from 'react';
import Image from 'next/image';

interface LoginModalProps {
    onClose: () => void;
}

export const LoginModal = ({ onClose }: LoginModalProps) => {
    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex flex-col text-center items-center justify-center z-10 bg-black bg-opacity-75"
            onClick={handleBackgroundClick}>
            <div className="bg-white p-4 rounded-lg">
                <div className='bg-[#1C3380] text-white p-4 rounded-t-lg mb-5'>
                    <Image className="fill-current h-24 w-24 mx-auto mb-4" width={200} height={200} src="\images\logoproatransparente.svg" alt='logo do PROA' />
                    <p className='text-lg'>Bem vindo à lojinha do PROA</p>
                </div>
                <form className="flex flex-col text-md">
                    <label htmlFor="email" className="w-full text-left">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Digite seu email"
                        className="p-2 border rounded mb-2" />
                    <label htmlFor="password" className="w-full text-left">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite sua senha"
                        className="p-2 border rounded mb-2" />
                    <button
                        type="submit"
                        className="bg-[#FDB022] text-white p-2 mb-3 rounded hover:bg-blue-600">
                        Continuar
                    </button>
                    <p className='text-lg mb-3'>OU</p>
                    <button
                        type="submit"
                        className="bg-[#ffffff] justify-evenly p-2 mb-4 rounded border-2 border-black-900 hover:bg-gray-200 flex items-center space-x-2"
                    >
                        <img
                            src="\images\google.png" // Replace with the actual path to your Google logo image
                            alt="Google Logo"
                            className="w-6 h-6" // Adjust the width and height as needed
                        />
                        <span>Continuar com Google</span>
                    </button>
                </form>
            </div>
        </div>
    );
};