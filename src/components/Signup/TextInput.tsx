```typescript
import React from 'react';
import { cn } from '@/lib/utils';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, id, className, type = 'text', ...props }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-sm font-medium text-gray-500">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={cn(
          'mt-1 block w-full border-0 border-b border-input bg-transparent p-1 text-card-foreground focus:border-primary focus:outline-none focus:ring-0',
          className
        )}
        {...props}
      />
    </div>
  );
};

export default TextInput;
```