// src/app/routes.ts
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component/main-layout.component';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component')
        .then(m => m.LoginComponent),
        data: { title: 'Iniciar sesión' }
    },
    {
        path: 'register',
        loadComponent: () => import('./auth/register/register.component')
        .then(m => m.RegisterComponent),
        data: { title: 'Registro' }
    },

    {
        path: '',
        component: MainLayoutComponent, 
        children: [

        {
            path: 'home',
            loadComponent: () => import('./features/home/home.component')
            .then(m => m.HomeComponent),
            data: { title: 'Home' }
        },

        {
            path: 'myprojects',
            loadComponent: () => import('./features/my-project/my-project.component')
            .then(m => m.MyProjectComponent),
            data: { title: 'Mis proyectos' }
        },

        {
            path: 'myprojects/proyecto/:id',
            loadComponent: () => import('./features/my-project/project-details/project-information/project-information.component')
            .then(m => m.ProjectDetailComponent),
            data: { title: 'Detalle del Proyecto' }
        },

        {
            path: 'myprojects/proyecto/:id/zone/:idZone',
            loadComponent: () => import('./features/my-project/project-details/study-zones.component/study-zones.component')
            .then(m => m.StudyZonesComponent),
            data: { title: 'Zona de estudio' }
        },

        {
            path: 'myprojects/proyecto/:id/proyecto-analisis',
            loadComponent: () => import('./features/my-project/project-details/biodiversity-analysis/biodiversity-analysis.component')
            .then(m => m.BiodiversityAnalysisComponent),
            data: { title: 'Análisis de biodiversidad' }
        },

        {
            path: 'team-projects',
            loadChildren: () => import('./features/team-projects/team-projects.module')
            .then(m => m.TeamProjectsModule),
            data: { title: 'Colaboraciones' }
        },
        {
            path: 'reports',
            loadChildren: () => import('./features/reports/reports.module')
            .then(m => m.ReportsModule),
            data: { title: 'Reportes' }
        },
        {
            path: 'configuration',
            loadChildren: () => import('./features/configuration/configuration.module')
            .then(m => m.ConfigurationModule),
            data: { title: 'Configuración' }
        },

        { path: '',       redirectTo: 'home', pathMatch: 'full' },
        { path: '**',     redirectTo: 'home' }   
        ]
    }
];