import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A simple layout component that centers its children in the middle of the screen.
 * It uses flexbox to achieve vertical and horizontal alignment and takes up the full viewport height.
 * This is ideal for focused views like login, sign-up, or error pages.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex h-screen w-full items-center justify-center bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
