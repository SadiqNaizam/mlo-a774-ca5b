import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, id, className, ...props }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full">
      <label htmlFor={id} className="text-sm font-medium text-gray-500">
        {label}
      </label>
      <div className="relative mt-1">
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          className={cn(
            'block w-full border-0 border-b border-input bg-transparent p-1 pr-10 text-card-foreground focus:border-primary focus:outline-none focus:ring-0',
            className
          )}
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
