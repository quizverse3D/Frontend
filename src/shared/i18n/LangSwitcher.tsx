import React from 'react';
import { useTranslation } from 'react-i18next';
export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const changeLang = (lng: string) => i18n.changeLanguage(lng);
    return (
        <div style={{ marginBottom: 16 }}>
            <button onClick={() => changeLang('ru')}>RU</button>
            <button onClick={() => changeLang('en')}>EN</button>
        </div>
    );
};
