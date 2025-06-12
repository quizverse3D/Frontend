import React from 'react';
import cls from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import { LangSwitcher } from '@/shared/i18n/LangSwitcher';

export const Header = () => {
    return (
        <header className={cls.Header}>
            {/* <Logo /> */}
            <LangSwitcher />
        </header>
    );
};
