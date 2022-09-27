import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: 'crm',
    loadChildren: () => import('./crm/crm.module').then(module => module.CrmModule),
    data: {
      title: 'CRM',
    }
  },
  {
    path: 'crm',
    pathMatch: 'full',
    redirectTo: 'crm/dashboard'
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    redirectTo: 'crm/dashboard'
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(module => module.ProfileModule),
    data: {
      title: 'Users',
      status: false
    }
  },
  // {
  //   path: 'users',
  //   loadChildren: () => import('./users/users.module').then(module => module.UsersModule),
  //   data: {
  //     title: 'Users',
  //     status: false
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
