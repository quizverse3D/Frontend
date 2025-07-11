import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import cls from './LangSwitcher.module.scss';

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();
    const changeLang = (lng: string) => i18n.changeLanguage(lng);
    return (
        <div className={cls.LangSwitcher}>
            <Button className={cls.Btn} onClick={() => changeLang('ru')}>
                RU
            </Button>
            <Button className={cls.Btn} onClick={() => changeLang('en')}>
                EN
            </Button>
        </div>
    );
};
