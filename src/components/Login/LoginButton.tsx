import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const LoginButton: React.FC<LoginButtonProps> = ({ children, className, ...props }) => {
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

export default LoginButton;
