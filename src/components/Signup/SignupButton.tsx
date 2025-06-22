```typescript
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SignupButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SignupButton: React.FC<SignupButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      type="submit"
      className={cn(
        'w-full bg-primary py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 rounded-lg',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SignupButton;
```