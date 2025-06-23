import React, { ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@/shared/utils/classNames/classNames';

export interface ButtonProps {
    className?: string;
    children?: ReactNode;
}

function Button(props: ButtonProps) {
    const { className = '', children, ...otherProps } = props;
    return (
        <button
            className={classNames(cls.Btn, {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default Button;
