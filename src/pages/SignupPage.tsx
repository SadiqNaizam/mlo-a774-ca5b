```typescript
import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import SignupForm from '@/components/Signup/SignupForm';

/**
 * The main sign-up page for the application.
 * It utilizes MainAppLayout to center the SignupForm component on the screen,
 * providing a focused user interface for new user registration.
 */
const SignupPage: React.FC = () => {
  return (
    <MainAppLayout>
      <SignupForm />
    </MainAppLayout>
  );
};

export default SignupPage;
```