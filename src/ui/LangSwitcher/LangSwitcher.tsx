import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import Button from '../Button';

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();
    const changeLang = (lng: string) => i18n.changeLanguage(lng);
    return (
        <div className={cls.LangSwitcherStyle}>
            <div>
                <Button
                    className={cls.BtnStyle}
                    onClick={() => changeLang('ru')}
                >
                    RU
                </Button>
                <Button
                    className={cls.BtnStyle}
                    onClick={() => changeLang('en')}
                >
                    EN
                </Button>
            </div>
        </div>
    );
};
