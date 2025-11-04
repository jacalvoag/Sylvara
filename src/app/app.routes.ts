import { Routes } from '@angular/router';
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
                path: 'myprojects',
                loadComponent: () => import('./features/my-project/my-project.component')
                .then(m => m.MyProjectComponent), data: {title: 'Mis proyectos'},
                    children: [
                        {
                            path: 'proyecto/:id',               
                            loadComponent: () =>
                            import('./features/my-project/project-details/project-information/project-information.component')
                                .then(m => m.ProjectDetailComponent),
                            data: { title: 'Detalle del Proyecto' },
                            children: [
                                {
                                    path: 'zone/:idZone',
                                    loadComponent: () =>
                                    import('./features/my-project/project-details/study-zones.component/study-zones.component')
                                        .then(m => m.StudyZonesComponent),
                                        data: {title: 'Zona de estudio'}
                                }
                            ]
                        },
                        {
                            path: '',                    
                            redirectTo: '',
                            pathMatch: 'full'
                        }
                    ]
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