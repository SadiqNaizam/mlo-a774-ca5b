import React, { useState } from 'react';

import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';
import LinkActions from './LinkActions';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle login logic here, e.g., call an API.
    console.log('Login attempt with:', { email, password });
    alert(`Logging in with Email: ${email}`);
  };

  return (
    <div className="w-96 rounded-lg bg-card p-6 text-card-foreground shadow-md">
      <h1 className="mb-8 text-center text-2xl font-bold text-card-foreground">
        Welcome
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextInput
          id="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        <div>
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <div className="mt-2 text-left">
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-primary">
              Forgot Password
            </a>
          </div>
        </div>
        
        <div className="pt-2">
          <LoginButton>Login</LoginButton>
        </div>
        
        <LinkActions />
      </form>
    </div>
  );
};

export default LoginForm;
