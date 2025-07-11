import React from 'react';
import cls from './AuthorizationPage.module.scss';
import { LoginForm } from '@/modules/authorization/components/LoginForm';
import { CyberDivider } from '@/ui/CyberDivider/CyberDivider';

export const AuthorizationPage = () => {
    return (
        <div className={cls.AuthorizationPage}>
            <div>
                <h1 className={cls.Title}>Авторизация</h1>
                <CyberDivider />
                <LoginForm />
            </div>
        </div>
    );
};
