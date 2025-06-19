import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/ui/Header/Header';
import cls from './MainLayout.module.scss';
const BinaryBg = () => {
    // Генерируем бинарный код (несколько строк)
    const lines = Array.from({ length: 50 }, () =>
        Array.from({ length: 120 }, () =>
            Math.random() > 0.5 ? '1' : '0'
        ).join('')
    ).join('\n');
    return <div className={cls.MainLayoutBg}>{lines}</div>;
};

export const MainLayout = () => {
    return (
        <div className={cls.MainLayout}>
            <Header />
            <BinaryBg />
            <main className={cls.MainLayoutContent}>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
};
