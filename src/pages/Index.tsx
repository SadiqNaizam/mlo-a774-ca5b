import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/Login/LoginForm';

/**
 * The main login page for the application.
 * It utilizes MainAppLayout to center the LoginForm component on the screen, 
 * providing a focused user interface for authentication.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default LoginPage;
