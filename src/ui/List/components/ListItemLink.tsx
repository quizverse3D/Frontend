import { AppLink, AppLinkProps } from '@/ui/AppLink';
import { classNames } from '@/shared/utils/classNames/classNames';
import cls from './List.module.scss';

interface ListItemLinkProps extends AppLinkProps {
    itemClassName?: string; // класс для li
    linkClassName?: string; // класс для AppLink
}

export const ListItemLink = ({
    itemClassName,
    linkClassName,
    className, // стандартный className из AppLinkProps
    children,
    ...linkProps
}: ListItemLinkProps) => (
    <li className={classNames(cls.ListItem, {}, [itemClassName])}>
        <AppLink
            className={classNames(cls.ListItemLink, {}, [linkClassName, className])}
            {...linkProps}
        >
            {children}
        </AppLink>
    </li>
);