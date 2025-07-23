import { lazy } from 'react';

export const AuthorizationPageAsync = lazy(() => import('./AuthorizationPage').then(module => ({ default: module.AuthorizationPage }))); 