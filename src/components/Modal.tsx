import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    const isNight = typeof document !== 'undefined' && document.body.classList.contains('night-mode');
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className={`rounded-lg shadow-lg w-full max-w-md p-6 relative ${isNight ? 'bg-[#181818] text-[#b3b3b3]' : 'bg-white text-gray-900'}`}>
                <button
                    className={`absolute top-2 right-2 text-xl ${isNight ? 'text-[#b3b3b3] hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
                {children}
            </div>
        </div>
    );
};

export default Modal;
