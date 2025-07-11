import React from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import cls from './List.module.scss';

interface ListItemProps {
    className?: string;
    children: React.ReactNode;
}

export const ListItem = (props: ListItemProps) => {
    const { className, children } = props;
    return (
        <li className={classNames(cls.Item, {}, [className])}>{children}</li>
    );
};
