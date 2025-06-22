```typescript
import React, { useState } from 'react';

import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import SignupButton from './SignupButton';
import LinkActions from './LinkActions';

const SignupForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // In a real application, you would handle signup logic here, e.g., call an API.
    console.log('Signup attempt with:', { fullName, email, password });
    alert(`Creating account for: ${email}`);
  };

  return (
    <div className="w-96 rounded-lg bg-card p-6 text-card-foreground shadow-md">
      <h1 className="mb-8 text-center text-2xl font-bold text-card-foreground">
        Create an Account
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextInput
          id="fullName"
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          autoComplete="name"
          required
          type="text"
        />
        <TextInput
          id="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          type="email"
        />
        <PasswordInput
          id="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        <PasswordInput
          id="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        
        <div className="pt-2">
          <SignupButton>Create Account</SignupButton>
        </div>
        
        <LinkActions />
      </form>
    </div>
  );
};

export default SignupForm;
```