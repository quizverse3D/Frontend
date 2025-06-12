import React, { ReactNode } from 'react';
interface ListItemProps {
    path: string;
    name: string;
    icon?: ReactNode;
}
export const ListItem = (props: ListItemProps) => {
    return <div>MenuItems</div>;
};
