'use client';

import { useState } from 'react';
import { Button } from './ui/button';

interface LoginModalProps {
    onLoginSuccess: () => void;
}

export default function LoginModal({ onLoginSuccess }: LoginModalProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (username === 'Admin1' && password === 'Admin1') {
            localStorage.setItem('isLoggedIn', 'true');
            onLoginSuccess();
        } else {
            setError('Username yoki parol xato!');
        }
    };

    return (
        <div className="fixed inset-0 bg-[#808080] bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white px-[35px] py-[90px] rounded-lg w-full max-w-[650px] h-[420px]">
                <h2 className="text-[32px] text-center font-bold mb-4">Admin Kirish</h2>
                {error && <p className="text-red-600 mb-2">{error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full mb-2 px-3 py-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border rounded"
                />
                <center>
                    <Button onClick={handleLogin} className="w-full max-w-[320px] bg-amber-600 hover:bg-amber-700">
                        Kirish
                    </Button>
                </center>
            </div>
        </div>
    );
}