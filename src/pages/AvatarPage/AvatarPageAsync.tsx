import { lazy } from 'react';

export const AvatarPageAsync = lazy(() => import('./AvatarPage').then(module => ({ default: module.AvatarPage }))); 