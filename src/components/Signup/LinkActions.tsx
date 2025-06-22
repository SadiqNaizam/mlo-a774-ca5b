```typescript
import React from 'react';
import { cn } from '@/lib/utils';

interface LinkActionsProps {
  className?: string;
}

const LinkActions: React.FC<LinkActionsProps> = ({ className }) => {
  return (
    <div className={cn('text-center text-sm text-gray-500', className)}>
      {'Already have an account? '}
      <a href="/" className="font-semibold text-primary hover:underline">
        Login
      </a>
    </div>
  );
};

export default LinkActions;
```