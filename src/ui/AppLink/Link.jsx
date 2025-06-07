import { LinkProps, NavLink } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export const AppLink = memo((props) => {
    const {
        to,
        className,
        children,
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink to={to} {...otherProps}>
            {children}
        </NavLink>
    );
});
