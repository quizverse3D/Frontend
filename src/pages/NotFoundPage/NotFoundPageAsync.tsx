import { lazy } from 'react';

export const NotFoundPageAsync = lazy(() => import('./NotFoundPage').then(module => ({ default: module.NotFoundPage }))); 