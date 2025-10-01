import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    className = '',
    disabled = false,
    icon,
}) => {
    // Detect theme from body class
    const theme = document.body.classList.contains('night-mode') ? 'night' : 'light';
    const themeStyles = theme === 'night'
        ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
        : 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-600';

    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 ${themeStyles} ${className}`}
            disabled={disabled}
        >
            {icon && <span className="text-lg">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
