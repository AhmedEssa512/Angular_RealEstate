import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PropertyDetailsComponent } from './Components/property-details/property-details.component';
import { CRUDOperationsComponent } from './Components/crud-operations/crud-operations.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'property/:id',
        component:PropertyDetailsComponent
    },
    {
        path:'crud',
        component:CRUDOperationsComponent
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'/home'
    },
];
