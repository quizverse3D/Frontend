import { LinkProps, NavLink } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import cls from './AppLink.module.scss';
import styles from './AppLink.module.scss';

export interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
    activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className = '',
        children,
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [activeClassName]: isActive }, [
                    className,
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
