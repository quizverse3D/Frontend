import React from 'react';
import cls from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import { useNavigate } from 'react-router-dom';
import Button from '@/ui/Button/Button';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { getRouteAuthorization } from '@/shared/consts/routes';
const ROUTES = {
    authorization: getRouteAuthorization(),
};
export const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // TODO: сбросить auth state
        navigate(ROUTES.authorization);
    };
    return (
        <header className={cls.Header}>
            <LangSwitcher />
            <Button variant="primary" className={cls.LogoutBtn} onClick={handleLogout} style={{marginLeft: 16}}>
                Выйти
            </Button>
        </header>
    );
};
