import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@/shared/utils/classNames/classNames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    variant?: string;
}

function Button(props: ButtonProps) {
    const { className = '', children, variant, ...otherProps } = props;
    return (
        <button
            className={classNames(variant === 'menu' ? '' : cls.Btn, {}, [
                className,
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default Button;
