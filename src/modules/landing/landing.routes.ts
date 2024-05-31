import { Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { PhpComponent } from './ui/pages/sections/php/php.component';
import { PythonComponent } from './ui/pages/sections/python/python.component';
import { DesignComponent } from './ui/pages/sections/design/design.component';

export const routes: Routes = [
    {
        path: '',
        component : HomeComponent
    },
    {
        path:'php',
        component : PhpComponent,
    },
    {
        path:'python',
        component : PythonComponent,
    },
    {
        path:'design',
        component : DesignComponent,
    },
    
];
