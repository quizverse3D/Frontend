import React, { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routeConfig, AppRoutesProps } from '@/routes';

import Loader from '@/ui/Loader/Loader.tsx';
import ErrorBoundary from '../error/ErrorBoundary';

import { RequireAuth } from '@/shared/router/RequireAuth';

import cls from './App.module.scss';

function mapAuthRoutes(routes: AppRoutesProps[]): AppRoutesProps[] {
    return routes.map((route) => {
        let element = route.element;
        if (route.authOnly) {
            element = <RequireAuth roles={route.roles}>{element}</RequireAuth>;
        }
        let mappedRoute: AppRoutesProps = { ...route, element };
        if (route.children) {
            mappedRoute.children = mapAuthRoutes(
                route.children as AppRoutesProps[]
            );
        } else {
            delete mappedRoute.children;
        }
        return mappedRoute;
    });
}

const AppRouter = () => {
    const element = useRoutes(mapAuthRoutes(routeConfig));
    return <Suspense fallback={<Loader />}>{element}</Suspense>;
};

export const App = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <div className={cls.App}>
                    <AppRouter />
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    );
};
