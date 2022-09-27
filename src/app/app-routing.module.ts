import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { AuthGuard } from './theme/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'components/crm/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'components',
        loadChildren: () => import('./demo/components/components.module').then(module => module.ComponentsModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [{
      path: '',
      redirectTo: 'auth',
      pathMatch: 'full'
    },
    {
      path: 'auth',
      loadChildren: () => import('../app/theme/layout/auth/auth.module').then(module => module.AuthModule),
    }]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
