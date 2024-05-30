import { Routes } from '@angular/router';

import {routes as LandingRoutes} from '@/modules/landing/landing.routes'

export const routes: Routes = [
    {
        path: 'landing',
        loadChildren : () => LandingRoutes
    },
    { path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
    },
];
