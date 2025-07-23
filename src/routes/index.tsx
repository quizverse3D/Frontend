import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { GamePage } from '@/pages/GamePage';
import { AuthorizationPage } from '@/pages/AuthorizationPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    getRouteAuthorization,
    getRouteAvatar,
    getRouteForbidden,
    getRouteGame,
    getRouteHome,
    getRouteMultiplayer,
    getRouteSetting,
} from '../shared/consts/routes';
import { RouteObject } from 'react-router-dom';
import { AvatarPage } from '@/pages/AvatarPage';
import { MultiplayerPage } from '@/pages/MultiplayerPage';

export type AppRoutesProps = RouteObject & {
    authOnly?: boolean;
    roles?: string[];
};

export const routeConfig: AppRoutesProps[] = [
    {
        path: getRouteHome(),
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: getRouteAuthorization(),
                element: <AuthorizationPage />,
            },
            {
                path: getRouteSetting(),
                element: <SettingsPage />,
            },
            {
                path: getRouteMultiplayer(),
                element: <MultiplayerPage />,
            },
            {
                path: getRouteAvatar(),
                element: <AvatarPage />,
            },
            {
                path: getRouteGame(),
                element: <GamePage />,
            },
        ],
    },
    {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
