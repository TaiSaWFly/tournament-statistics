import React, { RefObject, ReactNode } from "react";

interface ModalProps {
    reference?: RefObject<any>;
    isOpen: boolean;
    onClose?: () => void;
    className: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    reference,
    isOpen,
    onClose,
    className,
    children
}) => {
    return (
        <>
            {isOpen && (
                <div ref={reference} className={className} onClick={onClose}>
                    {children}
                </div>
            )}
        </>
    );
};

export default Modal;
