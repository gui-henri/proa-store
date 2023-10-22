import React, { useState } from 'react'

interface LoginModalProps {onClose:() => void}

export const LoginModal = ({onClose}: LoginModalProps) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <button onClick={onClose}>
                X
            </button>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button type="submit">login</button>
            </form>
        </div>
    )
}