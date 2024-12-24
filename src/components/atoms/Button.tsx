import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  clickable: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  clickable,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: clickable ? 'pointer' : 'not-allowed',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
