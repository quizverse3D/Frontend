import React from 'react';
import { useTranslation } from 'react-i18next';
export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const changeLang = (lng) => i18n.changeLanguage(lng);
    return (
        <div style={{ marginBottom: 16 }}>
            <h1>{t('3D Quiz Game')}</h1>
            <button onClick={() => changeLang('ru')}>RU</button>
            <button onClick={() => changeLang('en')}>EN</button>
        </div>
    );
};
