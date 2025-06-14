import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/ui/Header/Header';
import cls from './MainLayout.module.scss';

export const MainLayout = () => {
    return (
        <div className={cls.MainLayout}>
            <Header />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
};
