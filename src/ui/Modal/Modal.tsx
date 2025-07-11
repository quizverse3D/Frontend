import React from 'react';
import cls from './Modal.module.scss';
import { Button } from '../Button';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    if (!open) return null;
    return (
        <div className={cls.Modal} onClick={(e) => e.stopPropagation()}>
            <Button className={cls.ModalClose} onClick={onClose}>
                &times;
            </Button>
            <div className='content'>{children}</div>
        </div>
    );
};
