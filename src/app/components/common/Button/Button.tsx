import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: (e?: any) => void;
    onMouseEnter?: (e?: any) => void;
    onMouseLeave?: (e?: any) => void;
}

const Button: React.FC<ButtonProps> = ({
    className,
    children,
    onClick,
    onMouseEnter,
    onMouseLeave
}) => {
    return (
        <button {...{ onClick, onMouseEnter, onMouseLeave, className }}>
            {children}
        </button>
    );
};

export default Button;
