import React from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import cls from './List.module.scss';

interface ListItemProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

export const ListItem = ({ className, children }: ListItemProps) => (
    <li className={classNames(cls.Item, {}, [className])}>{children}</li>
);
