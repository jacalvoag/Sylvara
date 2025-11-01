import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainLayoutComponent } from './layout/main-layout.component/main-layout.component';

export const routes: Routes = [

    { path: 'login', loadComponent: () => import ('./auth/login/login.component').then(m => m.LoginComponent)},
    { path: 'register', loadComponent: () => import ('./auth/register/register.component').then(m => m.RegisterComponent)},
    {
    path: 'app',
    component: MainLayoutComponent,
     children: [
            {
                path: 'home',
                loadComponent: () => import('./features/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'my-project',
                loadComponent: () => import('./features/my-project/my-project.module').then(m => m.MyProjectModule)
            }
        ]
    }
];