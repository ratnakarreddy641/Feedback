import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Feedback } from './feedback/feedback';
import { Admin } from './admin/admin';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'feedback/:userId', component: Feedback },
    { path: 'admin', component: Admin },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
