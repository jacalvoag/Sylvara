import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainLayoutComponent } from './layout/main-layout.component/main-layout.component';

export const routes: Routes = [

    { path: 'login', 
        loadComponent: () => import ('./auth/login/login.component')
        .then(m => m.LoginComponent)},
    { path: 'register', 
        loadComponent: () => import ('./auth/register/register.component')
        .then(m => m.RegisterComponent)},
    {

    path: '',
    component: MainLayoutComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./features/home/home.component')
                .then(m => m.HomeComponent), data: {title: 'Home'}
            },

            {
                path: 'my-project',
                loadComponent: () => import('./features/my-project/my-project.component')
                .then(m => m.MyProjectComponent), data: {title: 'Mis proyectos'}
            },

            {
                path: 'team-projects',
                loadComponent: () => import('./features/team-projects/team-projects.module')
                .then(m => m.TeamProjectsModule), data: {title: 'Colaboraciones'}
            },

            {
                path: 'reports',
                loadComponent: () => import('./features/reports/reports.module')
                .then(m => m.ReportsModule), data: {title: 'Reportes'}
            },

            {
                path: 'configuration',
                loadComponent: () => import('./features/configuration/configuration.module')
                .then(m => m.ConfigurationModule), data: {title: 'Configuración'}
            },

            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            }
        ]
    }
];