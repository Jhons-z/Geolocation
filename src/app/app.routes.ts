import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home', // Ruta raíz (Inicio)
        loadComponent: () => import('./features/home/home').then(m => m.Home)
    },
    {
        path: 'dashboard/iniciar-sesion',
        loadComponent: () => import('./features/auth/login/login').then(m => m.Login)
    },
    {
        path: 'dashboard/registro',
        loadComponent: () => import('./features/auth/register/register').then(m => m.Register)
    },
    {
        path: '**', // Ruta comodín (Wildcard)
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
