import React, { ReactNode } from 'react';
import cls from './List.module.scss';
import { classNames } from '@/shared/utils/classNames/classNames';

interface ListProps {
    className?: string;
    children: ReactNode | ReactNode[]; // Принимаем children вместо items
}

export const List = ({ className, children }: ListProps) => {
    return (
        <ul className={classNames(cls.List, {}, [className])}>
            {children}
        </ul>
    );
};