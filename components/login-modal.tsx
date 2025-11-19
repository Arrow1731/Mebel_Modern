'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LoginModalProps {
  onLoginSuccess: () => void;
}

export default function LoginModal({ onLoginSuccess }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      onLoginSuccess();
    } else {
      setError("Foydalanuvchi Login yoki Parol Noto'g'ri");
    }
  };

  return (
    <div className="fixed inset-0 bg-[#000] bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-[500px] h-[350px]">
        <CardHeader className='text-center text-[25px]'>
          <CardTitle>Tizimga Kirish</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 mt-[20px]">
          <div>
            <label className="block text-sm font-medium mb-1">Foydalanuvchi Nomi</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Parol</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="admin123"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button onClick={handleLogin} className="w-full bg-amber-600 hover:bg-amber-700">
            Kirish
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
