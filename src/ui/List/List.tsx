import React, { ReactNode } from 'react';
import cls from './List.module.scss';
import { AppLink } from '@/ui/AppLink/AppLink';
import { classNames } from '@/shared/utils/classNames/classNames';
interface ListItem {
    path: string;
    name: string;
    // Дополнительные свойства, если нужны:
    icon?: ReactNode;
    disabled?: boolean;
}

interface ListProps {
    className?: string;
    items: ListItem[]; // Массив элементов списка
    children?: ReactNode; // Дочерние элементы (например, статические пункты)
    activeClassName?: string; // Класс для активного состояния
    renderItem?: (item: ListItem) => ReactNode; // Опциональный кастомный рендер
}
export const List = (props: ListProps) => {
    const {
        className,
        items = [],
        children,
        activeClassName,
        renderItem,
    } = props;

    return (
        <ul className={classNames(cls.List, {}, [className])}>
            {/* Динамические элементы из items */}
            {items.map((item) =>
                renderItem ? (
                    renderItem(item)
                ) : (
                    <li key={item.path}>
                        <AppLink
                            to={item.path}
                            activeClassName={activeClassName}
                        >
                            {item.name}
                        </AppLink>
                    </li>
                )
            )}

            {/* Статические дочерние элементы */}
            {children}
        </ul>
    );
};
