import { Routes } from '@angular/router';
import { Login } from './auth/login/login.component';

export const routes: Routes = [

    { path: 'login', loadComponent: () => import ('./auth/login/login.component').then(m => m.Login)}

];
