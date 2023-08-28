import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: (e?: any) => void;
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;
