import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from '@/routes';
import { MainMenu } from '@/modules/mainMenu';
import Loader from '@/modules/ui/Loader/Loader.jsx';
import ErrorBoundary from '../error/ErrorBoundary';

export const App = () => {
    const { t, i18n } = useTranslation();

    const changeLang = (lng) => i18n.changeLanguage(lng);

    return (
        <ErrorBoundary>
            <BrowserRouter>
                <div className='app-container'>
                    <header>
                        <h1>{t('3D Quiz Game')}</h1>
                        <div style={{ marginBottom: 16 }}>
                            <button onClick={() => changeLang('ru')}>RU</button>
                            <button onClick={() => changeLang('en')}>EN</button>
                        </div>
                    </header>
                    <main>
                        <Suspense fallback={<Loader />}>
                            <Routes>
                                {routes.map((route) => (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        element={<route.element />}
                                    />
                                ))}
                                <Route path='*' element={<MainMenu />} />
                            </Routes>
                        </Suspense>
                    </main>
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    );
};
