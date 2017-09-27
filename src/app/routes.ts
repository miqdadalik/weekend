import { HomeComponent } from './modules/home/home.component';

export const Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'test',
        component: HomeComponent
    }
];